import navStyles from "../styles/Nav.module.css";
import Navlinks from "./Navlinks";

const Nav = () => {
  return (
    <nav className={navStyles.normalNav}>
      <Navlinks />
    </nav>
  );
};

export default Nav;
