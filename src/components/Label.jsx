import styles from "./Label.module.css";

function Label({ children, className, ...rest }) {
  return (
    <label className={`${styles.label} ${className}`} {...rest}>
      {children}
    </label>
  );
}

export default Label;
