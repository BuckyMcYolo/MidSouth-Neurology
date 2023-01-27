import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Navlinks = () => {
  const router = useRouter();
  router.pathname === "/" ? console.log("home") : console.log("not home");
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
