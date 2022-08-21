import FooterStyles from "../styles/Footer.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div>
      <footer className={FooterStyles.footer}>
        <h3>
          <Image
            src="/Midsouth_Large_logo.png"
            width={300}
            height={125}
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
              scale: 1.1,
              opacity: 0.9,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            {" "}
            <a href="https://mychart.baptistonecare.org/prd/Authentication/Login?">
              {" "}
              MyChart{" "}
            </a>{" "}
          </motion.button>
        </p>
        <p className={FooterStyles.copyright}>
          &#169; MidSouth Neurology 2022
          <Image src="/ABP&N.png" width={55} height={65} />
        </p>{" "}
      </footer>
    </div>
  );
};

export default Footer;
