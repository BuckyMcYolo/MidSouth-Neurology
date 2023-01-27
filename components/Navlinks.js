import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import Image from "next/image";

const Navlinks = () => {
  return (
    <nav className={navStyles.nav}>
      {" "}
      <ul className={navStyles.nav_menu}>
        <li className={navStyles.nav_link}>
          <Link href="/">Home</Link>
        </li>
        <li className={navStyles.nav_link}>
          <Link href="/services">Our Services</Link>{" "}
        </li>
        <li className={navStyles.nav_link}>
          <Link href="/locations"> Locations</Link>
        </li>
        <li className={navStyles.nav_link}>
          <Link href="/NewPatientForm">New Patients</Link>{" "}
        </li>{" "}
      </ul>{" "}
    </nav>
  );
};

export default Navlinks;
