import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Image from "next/image";
import locationStyles from "../styles/Location.module.css";

const locations = () => {
  return (
    <div className={locationStyles.container}>
      <NavBar />
      <h2>Come see us wherever is more convienent for you</h2>
      <h3 className={locationStyles.tupelo}>
        <Image
          className={locationStyles.pics}
          src="/tupeloFront.png"
          height={400}
          width={650}
          layout="intrinsic"
          quality={100}
        />
        <p className={locationStyles.tupeloInfo}>
          {" "}
          Tupelo location: located @ <br />
          609 Brunson Drive <br />
          Tupelo, MS 38801
          <br /> Phone: 662-205-4486 <br />
          Fax: 662-205-4588
        </p>
      </h3>
      <h3>
        <Image
          className={locationStyles.pics}
          src="/tupeloFront.png"
          height={400}
          width={650}
          layout="intrinsic"
          quality={100}
        />
        Corinth location:
        <p>
          (Insert Image) located @ <br />
          2425 Proper Street <br />
          Corinth, MS 38834
        </p>
        <p>
          Phone: 662-396-9447 <br />
          Fax: 662-396-9449
        </p>
      </h3>
      <Footer />
    </div>
  );
};

export default locations;
