import Link from "next/link";
import boxElements from "../styles/ChooseUs.module.css";
import { motion } from "framer-motion";

export const whyChooseUs = () => {
  return (
    <div>
      <motion.article
        className={boxElements.mainGrid}
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ y: -50, x: 0, opacity: 1 }}
        transition={{ duration: 1.8 }}
        viewport={{ once: true }}
      >
        <p></p>
        <p className="text-3xl mx-0.5 leading-relaxed text-zinc-50 bg-slate-400 text-center">
          Here at MidSouth Neurology we provide comprehensive neurological care
          to patients in a 150 mile radius all across north east MS and southern
          TN.
          <br />
          <Link href="/locations">
            <a className="text-2xl underline text-blue-600 hover:text-blue-500 active:text-blue-400 rounded-full px-5 py-2 ">
              See Map
            </a>
          </Link>
        </p>
        <p className="text-2xl mx-0.5 leading-loose text-zinc-50  bg-slate-500 text-center">
          {" "}
          If you think you are having an emergency neurological problem such as
          stroke, seizure, syncope, or head trauma please call 911 as soon as
          possible. If you are calling about a regular visit click here
          <br />
          <a
            href="tel:6623969447"
            className=" text-blue-700 underline hover:text-blue-500 active:text-blue-400 rounded-full px-5 py-2 "
          >
            Contact Us
          </a>
        </p>
        <p className="text-3xl mx-0.5 leading-loose text-zinc-50 bg-slate-600 text-center">
          Some of the most common reasons why someone may need to make an
          appointment with us
          <br />
          <Link href="/resources">
            <a className="text-2xl underline text-blue-500 hover:text-blue-600 active:text-blue-400 rounded-full px-5 py-2 ">
              Resources
            </a>
          </Link>
        </p>
      </motion.article>
    </div>
  );
};
export default whyChooseUs;
