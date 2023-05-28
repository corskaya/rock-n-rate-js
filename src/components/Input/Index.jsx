import styles from "./styles.module.css";

function Input({ className, ...rest }) {
  return <input className={`${styles.input} ${className}`} {...rest} />;
}

export default Input;
