import Link from "next/link";
import Nav from "../components/Nav";
import NavBar from "../components/NavBar";
import Navlinks from "../components/Navlinks";

export const about = () => {
  return (
    <div>
      <NavBar />
      <h2>We are a family run clinic specializing in Neurology disorders</h2>
      <h3>
        Back to
        <Link href="/">
          <a> Home page</a>
        </Link>
      </h3>
    </div>
  );
};

export default about;
