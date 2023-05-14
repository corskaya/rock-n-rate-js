import styles from "../styles.module.css";

function FormField({ label, type }) {
  return (
    <div className={styles.formFieldContainer}>
      <div className={styles.formFieldLabel}>{`${label}:`}</div>
      <div>
        <input className={styles.formFieldInput} type={type} />
      </div>
    </div>
  );
}

export default FormField;
