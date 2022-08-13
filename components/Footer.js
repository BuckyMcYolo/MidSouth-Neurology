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
          <div className={FooterStyles.patient_portal}>
            Patient Portal:
            <br />
            <button className={FooterStyles.mychartbtn}>MyChart</button>
          </div>
        </h3>{" "}
        <p>
          <strong>Business Hours:</strong>
          <br></br>
          Monday through Friday: 8 AM to 5 PM
          <br />
          <strong>Locations:</strong>
          <br />
          &#183; 2425 Proper Street Corinth, MS 38834
          <br />
          &#183; 609 Brunson Drive Tupelo, MS 38801
          <div>&#169; MidSouth Neurology 2022</div>{" "}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
