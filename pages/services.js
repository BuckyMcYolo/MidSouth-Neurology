import Link from "next/link"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import serviceStyles from "../styles/Services.module.css"
import Image from "next/image"
import { motion, useScroll } from "framer-motion"
import Head from "next/head"

export const services = () => {
  const { scrollYProgress } = useScroll()
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
        transition={{ duration: 3 }}
        className={serviceStyles.main}
      >
        We offer a variety of specialized services
      </motion.h2>
      <h3 className={serviceStyles.services}>
        <ul>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3 }}
            className="text-4xl border-b-2 border-black "
          >
            <p>Nerve Conduction testing & Electromyography</p>
          </motion.li>

          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3 }}
            className="text-xl"
          >
            <Image
              src="/EMGhero.jpg"
              width={800}
              height={400}
              layout="intrinsic"
            />
            <br />
            EMG/Nerve testing is a Short 1 hour long diagnostic test that can
            detect nerve disorders such as Carpal Tunnel Syndrome and Cervical
            Radiculopathy (Pinched nerve in the neck)
            <br />
            If you have symptoms such as numbness or pain in your arms or legs,
            this test can determine if you have nerve damage.
            <br />{" "}
            <a
              href="https://www.mayoclinic.org/tests-procedures/emg/about/pac-20393913"
              className={serviceStyles.href}
            >
              {" "}
              Read this{" "}
            </a>{" "}
            article to learn more about how to prepare for your upcoming EMG
            test
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3 }}
            className="border-b-2 border-black text-4xl"
          >
            <p>EEGs</p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3 }}
            className="text-xl"
          >
            <Image
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 3 }}
              src="/Electroencephalogram.jpg"
              width={800}
              height={500}
              layout="intrinsic"
            />
            <br />
            An EEG (or Electroencephalogram) is a test that measures your brain
            waves and can determine if you may have disorders linked with
            abnormal brain waves such as seizures <br />{" "}
            <a
              href="https://www.mayoclinic.org/tests-procedures/eeg/about/pac-20393875"
              className={serviceStyles.href}
            >
              {" "}
              Find out more{" "}
            </a>{" "}
            about EEGs to better prepare for your upcoming EEG test.
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3 }}
            className="border-b-2 border-black text-4xl"
          >
            <p>Botox injections</p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3 }}
            className="text-xl"
          >
            <Image
              src="/botox.jpg"
              width={800}
              height={500}
              layout="intrinsic"
            />
            <br />
            Botox injections block certain chemical signals from nerves, mostly
            signals that cause muscles to contract. Botox injections use a toxin
            called botulin toxin A to temporarily paralyze muscles. This effect
            can be usd to help treat Cervical dystonia, Lazy eye, Muscle
            contractures, Hyperhidrosis, Chronic migraines and Eye twitching.{" "}
            <br />{" "}
            <a
              href="https://www.mayoclinic.org/tests-procedures/botox/about/pac-20384658"
              className={serviceStyles.href}
            >
              {" "}
              Find out more{" "}
            </a>{" "}
            about Botox.
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3 }}
            className="border-b-2 border-black text-4xl sm:pb-5"
          >
            <p>General Neurology</p>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3 }}
            className="text-xl"
          >
            <Image
              src="/services.jpg"
              width={800}
              height={500}
              layout="intrinsic"
              quality={100}
            />
            <br />
            Our main service here is general Neurology. We are experts in the
            field of Neurology here and offer diagnosis, treatment, and
            consulatations on conditions affecting the brain (central nervous
            system) and all other nerves (peripheal nervous system) Let our
            staff's decades of combined expierience serve you. <br />{" "}
          </motion.li>
        </ul>
      </h3>
      <Footer />
    </>
  )
}

export default services
