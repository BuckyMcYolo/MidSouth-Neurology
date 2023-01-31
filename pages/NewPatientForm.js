import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Head from "next/head";
import { Alert, Button, Container } from "@mui/material";
import { useRouter } from "next/router";

const NewPatientForm = () => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>New Patients - Midsouth Neurology</title>
      </Head>
      <NavBar />
      <Container>
        <Alert
          icon={false}
          severity="info"
          className=" text-base md:text-xl mt-12"
        >
          <h1 className="text-lg md:text-2xl text-center py-5 underline underline-offset-8 ">
            New Patient Form
          </h1>
          <p className="pb-8 text-center">
            To help us check you in faster and be better suited to prepare for
            your appointment, please fill out the new Patient Registration Form
            using the button below. We will contact you to confirm your
            appointment afterwards.
          </p>
          <div className="text-center">
            <Button
              onClick={() => router.push("/imNotARobot")}
              variant="contained"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded mb-5 font-sans"
            >
              Take me to the form
            </Button>
          </div>
        </Alert>
      </Container>

      <Container>
        <h3 className="flex flex-col items-center justify-center text-xl">
          <p className="text-white text-2xl md:text-3xl py-4 underline underline-offset-8">
            What should I bring when I come?
          </p>
          <p>
            {" "}
            Please bring a copy of your insurance card with you when you come.
            (We accept all insurances!)
          </p>
          <p className=" py-3">
            If you have been here before and your insurance has changed, please
            bring us the new copy so we can have it on file.
          </p>
          <p>Please bring your co-pay with you on your visit day.</p>{" "}
          <p className=" py-3">
            {" "}
            We will call you the day before your scheduled appointment and let
            you know if you have a co-pay.
          </p>
          <p className=" py-3">We accept cash and all credit cards.</p>
          <p className=" py-3">We look forward to seeing you!</p>
        </h3>
      </Container>
      <Footer />
    </div>
  );
};

export default NewPatientForm;
