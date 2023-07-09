import styles from "./styles.module.css";

function Button({ children, className, color = "Success", ...rest }) {
  return (
    <button
      className={`${styles.button} ${
        color === "Info" ? styles.infoColor : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
