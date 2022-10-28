import HeaderStyles from "../styles/Header.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const [is1Open, set1Open] = useState(false);
  const [is2Open, set2Open] = useState(false);
  const [is3Open, set3Open] = useState(false);
  const [is4Open, set4Open] = useState(false);

  return (
    <motion.div data-isOpen={is1Open} layout className={HeaderStyles.div}>
      <h1 className={HeaderStyles.title}>
        MidSouth <span> Neurology </span>
        <Image src="/logo-again.png" width={64} height={74} />
      </h1>
      <h3 className="text-2xl text-center">
        <ul className="font-bold pb-8 md">William E. Owens, MD</ul>
        <ul className={HeaderStyles.tests}>
          <motion.li
            layout
            data-isOpen={is1Open}
            initial={{ borderRadius: 35 }}
            className={HeaderStyles.parent}
            onClick={() => set1Open(!is1Open)}
          >
            Neurology
            <article className={HeaderStyles.expand}>(click to expand)</article>
            <p className={HeaderStyles.hidden}>
              Neurology can be a complex subject. We offer expert opinoin and
              advice on a variety of diverse neurological topics
            </p>
          </motion.li>
          <motion.li
            layout
            data-isOpen={is2Open}
            initial={{ borderRadius: 35 }}
            className={HeaderStyles.parent}
            onClick={() => set2Open(!is2Open)}
          >
            NCS/EMG Testing{" "}
            <article className={HeaderStyles.expand}>(click to expand)</article>
            <p className={HeaderStyles.hidden}>
              We see and diagnose over 800 Carpal Tunnel injuries per year. Come
              see us if you have numbness or pain in your hands or elbows
            </p>
          </motion.li>
          <motion.l
            layout
            data-isOpen={is3Open}
            initial={{ borderRadius: 35 }}
            className={HeaderStyles.parent}
            onClick={() => set3Open(!is3Open)}
          >
            Epilepsy{" "}
            <article className={HeaderStyles.expand}>(click to expand)</article>
            <p className={HeaderStyles.hidden}>
              We have an EEG lab on site and use the latest cutting edge
              technology to rule out if you have any abnormal electrical
              activity in your brain.
            </p>
          </motion.l>
          <motion.li
            layout
            data-isOpen={is4Open}
            initial={{ borderRadius: 35 }}
            className={HeaderStyles.parent}
            onClick={() => set4Open(!is4Open)}
          >
            Botox Therapy{" "}
            <article className={HeaderStyles.expand}>(click to expand)</article>
            <p className={HeaderStyles.hidden}>
              When nothing else can help with your Migraines, botox therapy can
              be your relief.
            </p>
          </motion.li>
        </ul>{" "}
      </h3>
    </motion.div>
  );
};

export default Header;
