import Link from "next/link";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export const services = () => {
  return (
    <div>
      <NavBar />
      <h2>Some of our services:</h2>
      <h3>
        Back to
        <Link href="/">
          <a> Home page</a>
        </Link>
        <ul>
          <li>
            EMG/Nerve testing for nerve disorders such as carpal tunnel
            syndrome.
          </li>
          <li>EEG and other diagnostic tests</li>
          <li>Short wait times and expert personal ready to assist you</li>
        </ul>
      </h3>
      <Footer />
    </div>
  );
};

export default services;
