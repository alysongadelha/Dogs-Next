import styles from "./Button.module.css";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: Props) => {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
};
