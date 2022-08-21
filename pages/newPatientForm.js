import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewPatientPageStyles from "../styles/NewPatient.module.css";

const newPatientForm = () => {
  return (
    <div>
      <NavBar />
      <h1 className={NewPatientPageStyles.question}>
        {" "}
        Are you a new patient of Dr. Owens?{" "}
      </h1>
      <h2 className={NewPatientPageStyles.form}>
        To help us check you in faster and be better suited to prepare for your
        appointment, please fill out the new Patient Registration Form below ,
        print it, and bring it with you when you come to your appointment
      </h2>
      <article className={NewPatientPageStyles.form}>
        {" "}
        <a href="https://onedrive.live.com/?authkey=%21ADwV5hCuVPYMWjM&cid=ECB6A90230453CEF&id=ECB6A90230453CEF%21740&parId=root&o=OneUp">
          {" "}
          <button className={NewPatientPageStyles.button}>
            Patient Registration Form{" "}
          </button>
        </a>
      </article>
      <Footer />
    </div>
  );
};

export default newPatientForm;
