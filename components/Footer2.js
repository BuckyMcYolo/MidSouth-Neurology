import FooterStyles from "../styles/Footer.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer2 = () => {
  return (
    <div className="flex flex-row bg-grayBackground justify-evenly align-middle text-white py-5">
      <p className="pt-5">&#169; MidSouth Neurology 2022</p>{" "}
      <Image
        alt="American Board of Neurology Certificate"
        src="/ABP&N.png"
        width={55}
        height={65}
        className="ml-60"
      />
    </div>
  );
};

export default Footer2;
