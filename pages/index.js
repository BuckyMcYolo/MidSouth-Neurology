import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Homestyles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MidSouth Neurology</title>
        <meta name="description" content="Neurology" />
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
      <Header />
      <article className={Homestyles.article}>
        <p>Our services: </p>
        <ul>
          <li>
            EMG/Nerve testing for nerve disorders such as carpal tunnel
            syndrome.
          </li>
          <li>EEG and other diagnostic tests</li>
          <li>Short wait times and expert personal ready to assist you</li>
        </ul>
      </article>
      <Footer />
    </div>
  );
}
