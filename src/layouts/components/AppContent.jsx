import { Outlet } from "react-router-dom";
import styles from "./AppContent.module.css";

function AppContent({ page }) {
  return (
    <div className={styles.contentContainer}>
      {page}
      <Outlet />
    </div>
  );
}

export default AppContent;
