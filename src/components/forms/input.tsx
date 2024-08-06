import styles from "./input.module.css";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export const Input = ({ label, error, ...props }: Props) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={props.name} className={styles.label}>
        {label}
      </label>
      <input
        id={props.name}
        name={props.name}
        type={props.type}
        className={styles.input}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
