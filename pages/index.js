import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
import Homestyles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import WhyChooseUs from "../components/WhyChooseUs";
import { useRouter } from "next/router";
import { Button } from "@mui/material";

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-[url('/brainBackground.jpg')] bg-fixed opacity-100">
      <Head>
        <title>
          MidSouth Neurology - Home - Corinth and Tupelo Neurology Clinic{" "}
        </title>
        <meta
          name="description"
          content="Tupelo Neurology and Corinth Neurology.  "
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <NavBar />
      <section className="pt-36"></section>
      <Header />
      <article className={Homestyles.article}>
        <h1 className={Homestyles.statement}>
          Providing exceptional Neurology service to Northeast Mississippi and
          surrounding areas for over 18 years. Come see us in our Tupelo or
          Corinth Offices.{" "}
        </h1>
        <p className={Homestyles.aboutUs}>
          We offer a broad range of Neurological services such as state of the
          art diagnostic testing equipment, medications and injections for
          Migraine headaches, and a physician who is top class in recognizing,
          diagnosing, and treating neuromuscular movement disorders
          <motion.button
            className={Homestyles.servicesButton}
            whileHover={{
              scale: 1.05,
              opacity: 0.9,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push("/services")}
          >
            Learn more about our services
          </motion.button>
        </p>
      </article>
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
