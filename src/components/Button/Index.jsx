import styles from "./styles.module.css";

function Button({ children, className, ...rest }) {
  return (
    <button className={`${styles.button} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
