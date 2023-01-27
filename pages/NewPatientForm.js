import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewPatientPageStyles from "../styles/NewPatient.module.css";
import Head from "next/head";
import { Alert, Button, Container, Paper, TextField } from "@mui/material";
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
              onClick={() => router.push("/Patient-Registration")}
              variant="contained"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded mb-5 "
            >
              Take me to the form
            </Button>
          </div>
        </Alert>
      </Container>
      {/* <section className="md:bg-[url('/newPatient.png')] bg-contain bg-no-repeat bg-local opacity-100 md:h-96 md:py-96 lg:bg-cover sm:bg-none py-6 sm:py-6">
        {" "}
        <h1 className={NewPatientPageStyles.head}>
          Are you a new patient of Dr. Owens?{" "}
        </h1>{" "}
        <p className={NewPatientPageStyles.form}>
          To help us check you in faster and be better suited to prepare for
          your appointment, please fill out the new Patient Registration Form
          below , print it, and bring it with you when you come to your
          appointment
        </p>{" "}
        <article className={NewPatientPageStyles.buttonform}>
          {" "}
          <a href="https://onedrive.live.com/?authkey=%21ADwV5hCuVPYMWjM&cid=ECB6A90230453CEF&id=ECB6A90230453CEF%21740&parId=root&o=OneUp">
            {" "}
            <button className={NewPatientPageStyles.button}>
              Patient Registration Form{" "}
            </button>
          </a>
        </article>{" "}
      </section> */}

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
