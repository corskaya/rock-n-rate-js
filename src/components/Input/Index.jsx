import styles from "./styles.module.css";

function Input({ className, isControlled = false, value, ...rest }) {
  return (
    <input
      className={`${styles.input} ${className}`}
      {...(isControlled ? { value } : {})}
      {...rest}
    />
  );
}

export default Input;
