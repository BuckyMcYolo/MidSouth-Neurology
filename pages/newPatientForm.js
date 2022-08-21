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
      <button className={NewPatientPageStyles.button}>
        Patient Registration Form
      </button>
    </div>
  );
};

export default newPatientForm;
