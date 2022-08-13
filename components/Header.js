import HeaderStyles from "../styles/Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <h1 className={HeaderStyles.title}>
        MidSouth <span> Neurology </span>
        <Image src="/logo-again.png" width={40} height={45} />
      </h1>
      <h3 className={HeaderStyles.certs}>
        <ul className={HeaderStyles.words}>William E. Owens, MD</ul>
        <ul className={HeaderStyles.words}>
          Neurology | NCS/EMG Testing | Sleep Disorders | Botox Therapy
        </ul>
      </h3>
    </div>
  );
};

export default Header;
