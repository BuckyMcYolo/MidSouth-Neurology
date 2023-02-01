import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Alert,
  Snackbar,
  CircularProgress,
} from "@mui/material";
import ReCAPTCHA from "react-google-recaptcha";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { BiErrorCircle } from "react-icons/bi";
import { setCookie } from "cookies-next";

const Robot = (props) => {
  const [width, setWidth] = useState(400);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (window.innerWidth < 375) {
      setWidth(window.innerWidth);
    } else {
      setWidth(375);
    }
  }, []);
  const capthcaRef = useRef(null);

  const verifyCaptcha = async (token) => {
    setLoading(true);
    const res = await fetch(
      "https://xmks-s250-ypw0.n7.xano.io/api:2WckYZIa/recaptcha/validate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          recaptcha: token,
        }),
      }
    );
    const data = await res.json();
    if (data.status === "success") {
      setCookie("recaptcha", true, {
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });

      router.replace("/Patient-Registration");
    } else {
      setError(true);
      setLoading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const token = capthcaRef.current.getValue();
    verifyCaptcha(token);
    capthcaRef.current.reset();
  };

  return (
    <form
      onSubmit={submitHandler}
      className="h-screen w-screen flex flex-col justify-center items-center"
    >
      <Card className="p-0 sm:p-4 maxxs1:w-64">
        <CardHeader
          title="Please verify you are not a robot"
          titleTypographyProps={{ fontSize: "1.2rem" }}
        />
        <CardContent className="flex justify-center">
          <ReCAPTCHA
            sitekey={props.siteKey}
            ref={capthcaRef}
            size={width < 375 ? "compact" : "normal"}
          />
        </CardContent>
        <CardActions className="flex justify-center">
          <Button
            endIcon={loading && <CircularProgress size={20} />}
            variant="outlined"
            type="submit  "
            disabled={loading}
          >
            Submit
          </Button>
        </CardActions>
      </Card>

      <Snackbar open={error}>
        <Alert
          icon={<BiErrorCircle className="text-white" />}
          className="bg-red-500 text-white rounded-lg"
          severity="error"
        >
          Error validating reCaptcha, please try again or refresh the page.
        </Alert>
      </Snackbar>
    </form>
  );
};

export default Robot;

export const getServerSideProps = async (context) => {
  return {
    props: {
      siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
    },
  };
};
