import Link from "next/link";
import boxElements from "../styles/ChooseUs.module.css";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

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
        {/* do not delete this p */}
        <p></p>
        <p className="text-xl md:text-2xl mx-0.5 leading-relaxed text-zinc-50 bg-slate-400 text-center">
          Here at MidSouth Neurology we provide comprehensive neurological care
          to patients in a 150 mile radius all across north east MS and southern
          TN.
          <br />
          <Link href="/locations">
            <a>
              <Button
                variant="contained"
                color="primary"
                className="bg-blue-500 text-white hover:bg-blue-600"
              >
                See Map
              </Button>
            </a>
          </Link>
        </p>
        <p className="text-xl md:text-2xl mx-0.5 leading-loose text-zinc-50  bg-slate-500 text-center">
          {" "}
          If you think you are having an emergency neurological problem such as
          stroke, seizure, syncope, or head trauma please call 911 as soon as
          possible. If you are calling about a regular visit click here
          <br />
          <a href="tel:6623969447">
            <Button
              variant="contained"
              color="primary"
              className="bg-blue-500 text-white hover:bg-blue-600"
            >
              Contact Us
            </Button>
          </a>
        </p>
        <p className="text-xl md:text-2xl mx-0.5 leading-loose text-zinc-50 bg-slate-600 text-center">
          Some of the most common reasons why someone may need to make an
          appointment with us
          <br />
          <Link href="/resources">
            <a>
              <Button
                variant="contained"
                color="primary"
                className="bg-blue-500 text-white hover:bg-blue-600"
              >
                Resources
              </Button>
            </a>
          </Link>
        </p>
      </motion.article>
    </div>
  );
};
export default whyChooseUs;
