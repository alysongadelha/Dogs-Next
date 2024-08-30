import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import getUser from "@/actions/get-user";

export const Header = async () => {
  const { data } = await getUser();
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
        {data ? (
          <Link className={styles.login} href={"/account"}>
            {data.username}
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
