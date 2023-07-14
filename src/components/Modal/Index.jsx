import styles from "./styles.module.css";

function Modal({ show, onClose, title, children }) {
  return (
    show && (
      <div className={styles.modalContainer}>
        <div onClick={onClose} className={styles.overlay}></div>
        <div className={styles.modalContent}>
          <h2>{title}</h2>
          <div>{children}</div>
          <button className={styles.closeModal} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    )
  );
}

export default Modal;
