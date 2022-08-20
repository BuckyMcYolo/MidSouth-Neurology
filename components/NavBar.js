import MobileNav from "./MobileNav";
import Nav from "./Nav";
import navStyles from "../styles/Nav.module.css";

const NavBar = () => {
  return (
    <div className={navStyles.NavBar}>
      <Nav />
      <MobileNav />
    </div>
  );
};

export default NavBar;
