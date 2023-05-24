import styles from "./Input.module.css";

function Input({ className, ...rest }) {
  return <input className={`${styles.input} ${className}`} {...rest} />;
}

export default Input;
