import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import NewPatientPageStyles from "../styles/NewPatient.module.css"
import Head from "next/head"

const newPatientForm = () => {
  return (
    <div>
      <Head>
        <title>New Patients - Midsouth Neurology</title>
      </Head>
      <NavBar />
      <section className="bg-[url('/newPatient.png')] bg-contain bg-no-repeat bg-local opacity-100 h-96 py-96 lg:bg-cover ">
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
      </section>
      <h3 className={NewPatientPageStyles.text}>
        <p className="text-white text-4xl underline mb-8">
          <br />
          What should I bring when I come?
        </p>
        <p> We accept all insurances!</p>
        <br />
        <p>
          {" "}
          Please bring a copy of your insurance card with you when you come.
        </p>
        <br />
        <p>
          If you have been here before and your insurance has changed, please
          bring us the new copy so we can have it on file.
        </p>
        <br />
        <br />
        <p>
          Please bring your co-pay with you on your visit day. <br />
        </p>{" "}
        <br />
        <p>
          {" "}
          We will call you the day before your scheduled appointment and let you
          know if you have a co-pay.
        </p>
        <br />
        <p>We accept cash and all credit cards.</p>
        <br />
        <p>We look forward to seeing you!</p>
      </h3>

      <Footer />
    </div>
  )
}

export default newPatientForm
