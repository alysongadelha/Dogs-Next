import Image from "next/image";
import styles from "./Footer.module.css";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <Image
        src={"/assets/dogs-footer.svg"}
        alt="Dogs"
        width={28}
        height={22}
      />
      <p>Dogs. Some rights reserved</p>
    </footer>
  );
};
