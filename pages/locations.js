import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Image from "next/image";
import locationStyles from "../styles/Location.module.css";
import Head from "next/head";
import {
  Container,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
} from "@mui/material";

const Locations = () => {
  return (
    <div>
      <Head>
        <title>Locations - Midsouth Neurology</title>
      </Head>
      <NavBar />
      <h2 className="m-0 p-8 text-2xl md:text-3xl font-bold  text-center">
        We can serve you at 2 different locations including our brand new Tupelo
        location
      </h2>
      <Card className="w-4/5 md:w-3/5 mx-auto my-4 p-5 bg-blue-100">
        <CardHeader
          title="Tupelo location"
          subheader="609 Brunson Drive Tupelo, MS 38801"
          className="text-2xl md:text-3xl font-bold text-center"
        />
        <CardMedia
          component="img"
          sx={{
            height: "auto",
            width: "auto",
          }}
          image="/tupeloFront.png"
          alt="Tupelo picture"
        />
        <CardContent className="bg-blue-100">
          <div className=" py-4 text-base md:text-xl lg:text-2xl text-center p-2">
            <ul>
              <li>
                We are located right behind NMMC-Tupelo on the corner of Brunson
                Drive and Council Cir.
              </li>
              <li> Phone: 662-205-4486</li>
              <li>Fax: 662-205-4588</li>
            </ul>
          </div>
        </CardContent>
        <div>
          <CardMedia
            className="h-72"
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d52778.07854518626!2d-88.73090263500984!3d34.232467000000014!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x88874d384776bed9%3A0x8c5726ec39078fc8!2sMidsouth%20Neurology%2C%20609%20Brunson%20Dr%2C%20Tupelo%2C%20MS%2038801!3m2!1d34.2418234!2d-88.7135672!5e0!3m2!1sen!2sus!4v1661251804392!5m2!1sen!2sus"
            image="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d52778.07854518626!2d-88.73090263500984!3d34.232467000000014!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x88874d384776bed9%3A0x8c5726ec39078fc8!2sMidsouth%20Neurology%2C%20609%20Brunson%20Dr%2C%20Tupelo%2C%20MS%2038801!3m2!1d34.2418234!2d-88.7135672!5e0!3m2!1sen!2sus!4v1661251804392!5m2!1sen!2sus"
            alt="Tupelo map"
          />
        </div>
      </Card>

      <Card className="w-4/5 md:w-3/5 mx-auto my-4 p-5 bg-blue-100">
        <CardHeader
          title="Corinth location"
          subheader="2425 Proper Street Corinth, MS 38834"
          className="text-2xl md:text-3xl font-bold text-center"
        />
        <CardMedia
          component="img"
          sx={{
            height: "auto",
            width: "auto",
          }}
          image="/corinth.png"
          alt="Tupelo picture"
        />
        <CardContent className="bg-blue-100">
          <div className=" py-4 text-base md:text-xl lg:text-2xl text-center p-2">
            <ul>
              <li>
                We are located on the corner of Harper road and Proper Street.
              </li>
              <li> Phone: 662-396-9447</li>
              <li>Fax: 662-396-9449</li>
            </ul>
          </div>
        </CardContent>
        <div>
          <CardMedia
            className="h-72"
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d124506.07663684218!2d-88.52751504350995!3d34.9121633672118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x887dc0b785c7639d%3A0x7ff76fc9320217b5!2sMidsouth%20Neurology%2C%20Proper%20Street%2C%20Corinth%2C%20MS!3m2!1d34.9311089!2d-88.4959583!5e0!3m2!1sen!2sus!4v1661251942355!5m2!1sen!2sus"
            image="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d124506.07663684218!2d-88.52751504350995!3d34.9121633672118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x887dc0b785c7639d%3A0x7ff76fc9320217b5!2sMidsouth%20Neurology%2C%20Proper%20Street%2C%20Corinth%2C%20MS!3m2!1d34.9311089!2d-88.4959583!5e0!3m2!1sen!2sus!4v1661251942355!5m2!1sen!2sus"
            alt="Tupelo map"
          />
        </div>
      </Card>

      <Footer />
    </div>
  );
};

export default Locations;
