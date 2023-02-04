import FooterStyles from "../styles/Footer.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer2 from "./Footer2";

const Footer = () => {
  return (
    <div>
      <footer className={FooterStyles.footer}>
        <h3>
          <Image
            src="/Midsouth_Large_logo.png"
            width={300}
            height={125}
            alt="Midsouth Neurology logo"
          ></Image>
        </h3>{" "}
        <span>
          <article className={FooterStyles.buisnessInfo}>
            <strong>Business Hours:</strong>
            <br></br>
            Monday-Friday: 8 AM to 5 PM
            <br />
            <strong>Locations:</strong>
            <br />
            &#183; 2425 Proper Street Corinth, MS 38834
            <br />
            &#183; 609 Brunson Drive Tupelo, MS 38801{" "}
          </article>
        </span>{" "}
        <p className={FooterStyles.patient_portal}>
          Patient Portal:
          <br />
          <motion.button
            className={FooterStyles.mychartbtn}
            whileHover={{
              scale: 1.05,
              opacity: 0.9,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            whileTap={{ scale: 0.97 }}
          >
            {" "}
            <a href="https://mychart.baptistonecare.org/prd/Authentication/Login?">
              {" "}
              MyChart{" "}
            </a>{" "}
          </motion.button>{" "}
        </p>{" "}
        <p className={FooterStyles.patient_portal}>
          Contact Us:
          <a href="tel:6623969447" className=" pl-2 sm:pl-0  text-center ">
            <motion.button
              className={FooterStyles.mychartbtn}
              whileHover={{
                scale: 1.05,
                opacity: 0.9,
                transition: { type: "spring", stiffness: 400, damping: 10 },
              }}
              whileTap={{ scale: 0.97 }}
            >
              {" "}
              Contact
            </motion.button>
          </a>
        </p>
      </footer>
      <Footer2 />
    </div>
  );
};

export default Footer;
