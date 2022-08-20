import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Navlinks = () => {
  return (
    <nav className={navStyles.nav}>
      {" "}
      <ul className={navStyles.nav_menu}>
        <li className={navStyles.nav_link}>
          <Link href="/">Home </Link>
        </li>
        <li className={navStyles.nav_link}>
          <Link href="/about">About</Link>{" "}
        </li>
        <li className={navStyles.nav_link}>
          <Link href="/locations"> Locations</Link>
        </li>
        <li className={navStyles.nav_link}>
          <Link href="/contact">Contact us</Link>{" "}
        </li>{" "}
      </ul>{" "}
    </nav>
  );
};

export default Navlinks;
