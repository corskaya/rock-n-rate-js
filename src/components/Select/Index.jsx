import { CaretDownFilled, CaretUpFilled } from "@ant-design/icons";
import styles from "./styles.module.css";

const Select = ({ className, options = [], value, onChange }) => {
  return (
    <div className={styles.selectContainer}>
      <select
        className={`${styles.select} ${className}`}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className={styles.arrowIcon}>
        <div className={styles.iconContainer}>
          <CaretUpFilled className={styles.icon} />
          <CaretDownFilled className={`${styles.icon} ${styles.iconBottom}`} />
        </div>
      </div>
    </div>
  );
};

export default Select;
