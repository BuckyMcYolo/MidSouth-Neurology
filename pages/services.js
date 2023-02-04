import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import serviceStyles from "../styles/Services.module.css";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";
import Head from "next/head";
import {
  CardContent,
  CardMedia,
  Card,
  CardHeader,
  Container,
} from "@mui/material";

export const Services = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Head>
        <title>Services - MidSouth Neurology</title>
      </Head>{" "}
      <NavBar />
      <motion.div
        className={serviceStyles.scrollBar}
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className={serviceStyles.main}
      >
        We offer a variety of specialized services
      </motion.h2>
      <h3 className={serviceStyles.services}>
        <ul>
          <Container>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="text-xl"
            >
              <Card className="rounded-xl my-4">
                <CardHeader
                  titleTypographyProps={{ variant: "h5" }}
                  title="Nerve Conduction testing & Electromyography"
                />
                <CardMedia>
                  <Image
                    src="/EMGhero.jpg"
                    width={800}
                    height={400}
                    layout="intrinsic"
                    alt="EMG being done"
                  />
                </CardMedia>
                <CardContent className="text-lg md:text-xl">
                  EMG/Nerve testing is a Short 1 hour long diagnostic test that
                  can detect nerve disorders such as Carpal Tunnel Syndrome and
                  Cervical Radiculopathy (Pinched nerve in the neck)
                  <br />
                  If you have symptoms such as numbness or pain in your arms or
                  legs, this test can determine if you have nerve damage.
                  <br />{" "}
                  <a
                    href="https://www.mayoclinic.org/tests-procedures/emg/about/pac-20393913"
                    className={serviceStyles.href}
                  >
                    {" "}
                    Read this{" "}
                  </a>{" "}
                  article to learn more about how to prepare for your upcoming
                  EMG test
                </CardContent>
              </Card>
            </motion.li>
          </Container>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="border-b-2 border-black text-4xl"
          ></motion.li>
          <Container>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="text-xl"
            >
              <Card className="rounded-xl my-4">
                <CardHeader
                  titleTypographyProps={{ variant: "h4" }}
                  title="EEG"
                />
                <CardMedia>
                  <Image
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    src="/Electroencephalogram.jpg"
                    width={800}
                    height={500}
                    layout="intrinsic"
                    alt="EEG being done"
                  />
                </CardMedia>
                <CardContent className="text-lg md:text-xl">
                  An EEG (or Electroencephalogram) is a test that measures your
                  brain waves and can determine if you may have disorders linked
                  with abnormal brain waves such as seizures <br />{" "}
                  <a
                    href="https://www.mayoclinic.org/tests-procedures/eeg/about/pac-20393875"
                    className={serviceStyles.href}
                  >
                    {" "}
                    Find out more{" "}
                  </a>{" "}
                  about EEGs to better prepare for your upcoming EEG test.
                </CardContent>
              </Card>
            </motion.li>
          </Container>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="border-b-2 border-black text-4xl"
          ></motion.li>
          <Container>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="text-xl"
            >
              <Card className="rounded-xl my-4">
                <CardHeader
                  titleTypographyProps={{ variant: "h4" }}
                  title="Botox Injections"
                />
                <CardMedia>
                  <Image
                    src="/botox.jpg"
                    width={800}
                    height={500}
                    layout="intrinsic"
                    alt="Botox being done"
                  />
                </CardMedia>
                <CardContent className="text-lg md:text-xl">
                  Botox injections block certain chemical signals from nerves,
                  mostly signals that cause muscles to contract. Botox
                  injections use a toxin called botulin toxin A to temporarily
                  paralyze muscles. This effect can be usd to help treat
                  Cervical dystonia, Lazy eye, Muscle contractures,
                  Hyperhidrosis, Chronic migraines and Eye twitching.
                  <br />
                  <a
                    href="https://www.mayoclinic.org/tests-procedures/botox/about/pac-20384658"
                    className={serviceStyles.href}
                  >
                    {" "}
                    Find out more{" "}
                  </a>{" "}
                  about Botox.
                </CardContent>
              </Card>
            </motion.li>
          </Container>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="border-b-2 border-black text-4xl sm:pb-5"
          ></motion.li>
          <Container>
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="text-xl"
            >
              <Card className="rounded-xl my-4">
                <CardHeader
                  titleTypographyProps={{ variant: "h4" }}
                  title="General Neurology"
                >
                  General Neurology
                </CardHeader>
                <CardMedia>
                  <Image
                    src="/services.jpg"
                    width={800}
                    height={500}
                    layout="intrinsic"
                    quality={100}
                    alt="Neurologist showing patient MRI"
                  />
                </CardMedia>
                <CardContent className="text-lg md:text-xl">
                  Our main service here is general Neurology. We are experts in
                  the field of Neurology here and offer diagnosis, treatment,
                  and consulatations on conditions affecting the brain (central
                  nervous system) and all other nerves (peripheal nervous
                  system) Let our staff's decades of combined expierience serve
                  you.
                </CardContent>
              </Card>
            </motion.li>
          </Container>
        </ul>
      </h3>
      <Footer />
    </>
  );
};

export default Services;
