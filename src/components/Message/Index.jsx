import styles from "./styles.module.css";

function Message({ children, className, ...rest }) {
  return (
    <span className={`${styles.message}`} {...rest}>
      {children}
    </span>
  );
}

export default Message;
