import Link from "next/link";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import serviceStyles from "../styles/Services.module.css";

export const services = () => {
  return (
    <div>
      <NavBar />
      <h2 className={serviceStyles.main}>
        We offer a variety of specialized services
      </h2>
      <h3 className={serviceStyles.services}>
        <ul>
          <li>Nerve Conduction testing/Electromyography</li>
          <li>
            EMG/ nerve testing is a Short 1 hour diagnostic test that can detect
            nerve disorders such as carpal tunnel syndrome and Cervical
            Radiculopathy (Pinched nerve in the neck)
            <br />
            If you have symptoms such as numbness or pain in your arms or legs,
            this test can determine if you have nerve damage.
            <br />
            Read{" "}
            <a
              href="https://www.mayoclinic.org/tests-procedures/emg/about/pac-20393913"
              className={serviceStyles.href}
            >
              {" "}
              this{" "}
            </a>{" "}
            article to learn more about how to prepare for your upcoming EMG
            test
          </li>
          <li>EEG and other diagnostic tests</li>
          <li>
            An EEG (or Electroencephalogram) is a test that measures your brain
            waves and can determine if you may have disorders linked with
            abnormal brain waves such as seizures <br />{" "}
            <a
              href="https://www.mayoclinic.org/tests-procedures/eeg/about/pac-20393875"
              className={serviceStyles.href}
            >
              {" "}
              Find out more{" "}
            </a>{" "}
            about EEGs to better prepare for your upcoming EEG test.
          </li>
          <li>Short wait times and expert personal ready to assist you</li>
        </ul>
      </h3>
      <Footer />
    </div>
  );
};

export default services;
