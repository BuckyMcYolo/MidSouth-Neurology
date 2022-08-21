import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const locations = () => {
  return (
    <div>
      <NavBar />
      <h2>Come see us wherever is more convienent for you</h2>
      <h3>
        Tupelo location:
        <p>
          (Insert Image) located @ <br />
          609 Brunson Drive <br />
          Tupelo, MS 38801
        </p>
        <p>
          Phone: 662-205-4486 <br />
          Fax: 662-205-4588
        </p>
      </h3>
      <h3>
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
