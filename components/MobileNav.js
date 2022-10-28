import Navlinks from "./Navlinks"
import navStyles from "../styles/Nav.module.css"
import Hamburger from "hamburger-react"
import { useEffect, useState } from "react"

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className={navStyles.mobileNav}>
      {" "}
      <div className={navStyles.styledBurger} onClick={() => setOpen(!isOpen)}>
        <Hamburger
          direction="right"
          toggled={isOpen}
          toggle={setOpen}
          rounded
        ></Hamburger>
      </div>
      {isOpen && <Navlinks />}
    </nav>
  )
}

export default MobileNav
