import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
type Props = {};

export const Header = (props: Props) => {
  const user = false;
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} href={"/"}>
          <Image
            src={"/assets/dogs.svg"}
            alt="dog"
            width={28}
            height={22}
            priority
          />
        </Link>
        {user ? (
          <Link className={styles.login} href={"/profile"}>
            dogs
          </Link>
        ) : (
          <Link className={styles.login} href={"/login"}>
            Login / Create
          </Link>
        )}
      </nav>
    </header>
  );
};
