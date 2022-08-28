import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Image from "next/image"
import locationStyles from "../styles/Location.module.css"

const locations = () => {
  return (
    <div className={locationStyles.main}>
      <NavBar />
      <h2 className="m-0 p-8 text-2xl md:text-4xl font-bold h-44 text-center relative container font-sans font ">
        We can serve you at 2 different locations including our brand new Tupelo
        location
      </h2>
      <h3 className={locationStyles.tupelo}>
        {" "}
        <p className="text-white py-4 text-3xl text-center p-2">
          {" "}
          <span className="text-black font-bold">Tupelo location: </span> <br />
          609 Brunson Drive <br />
          Tupelo, MS 38801
          <br /> Phone: 662-205-4486 <br />
          Fax: 662-205-4588
          <br />
          <Image
            className={locationStyles}
            src="/tupeloFront.png"
            height={350}
            width={450}
            layout="intrinsic"
            quality={100}
          />{" "}
        </p>
        <iframe
          className=""
          src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d52778.07854518626!2d-88.73090263500984!3d34.232467000000014!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x88874d384776bed9%3A0x8c5726ec39078fc8!2sMidsouth%20Neurology%2C%20609%20Brunson%20Dr%2C%20Tupelo%2C%20MS%2038801!3m2!1d34.2418234!2d-88.7135672!5e0!3m2!1sen!2sus!4v1661251804392!5m2!1sen!2sus"
          width="1100"
          height="600"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          layout="intrinsic"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </h3>
      <p className="py-10"></p>
      <br />
      <h3 className={locationStyles.corinth}>
        {" "}
        <iframe
          className="pl-10 pb-10 md:p-0"
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d124506.07663684218!2d-88.52751504350995!3d34.9121633672118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x887dc0b785c7639d%3A0x7ff76fc9320217b5!2sMidsouth%20Neurology%2C%20Proper%20Street%2C%20Corinth%2C%20MS!3m2!1d34.9311089!2d-88.4959583!5e0!3m2!1sen!2sus!4v1661251942355!5m2!1sen!2sus"
          width="1100"
          height="600"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <p className="text-white py-4 pr-8 text-3xl text-center p-2 md:p-0">
          <span className="text-black font-bold">
            {" "}
            Corinth location:
            <br />
          </span>
          2425 Proper Street <br />
          Corinth, MS 38834
          <br /> Phone: 662-396-9447 <br />
          Fax: 662-396-9449{" "}
          <Image
            className=""
            src="/tupeloFront.png"
            height={350}
            width={600}
            layout="intrinsic"
            quality={100}
          />
        </p>
      </h3>
      <Footer />
    </div>
  )
}

export default locations
