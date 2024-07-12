import styles from "./Login.module.css";

type Props = {
  children: React.ReactNode;
};

const LoginLayout = ({ children }: Props) => {
  return (
    <main className={styles.login}>
      <div className={styles.forms}>{children}</div>
    </main>
  );
};

export default LoginLayout;
