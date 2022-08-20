import FooterStyles from "../styles/Footer.module.css";
import Image from "next/image";

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
          <p className={FooterStyles.patient_portal}>
            Patient Portal:
            <br />
            <button className={FooterStyles.mychartbtn}>MyChart</button>
          </p>
        </h3>{" "}
        <span>
          <strong>Business Hours:</strong>
          <br></br>
          Monday through Friday: 8 AM to 5 PM
          <br />
          <strong>Locations:</strong>
          <br />
          &#183; 2425 Proper Street Corinth, MS 38834
          <br />
          &#183; 609 Brunson Drive Tupelo, MS 38801
          <p className="FooterStyles.copyright">
            &#169; MidSouth Neurology 2022
          </p>{" "}
        </span>
      </footer>
    </div>
  );
};

export default Footer;
