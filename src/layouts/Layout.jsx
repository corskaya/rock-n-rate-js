import AppHeader from "./components/AppHeader/Index";
import AppContent from "./components/AppContent/Index";
import AppFooter from "./components/AppFooter/Index";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <div className={styles.layoutContainer}>
      <div>
        <AppHeader />
      </div>
      <div>
        <AppContent />
      </div>
      <div>
        <AppFooter />
      </div>
    </div>
  );
}

export default Layout;
