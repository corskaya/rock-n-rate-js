import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";
import AppFooter from "./components/AppFooter";
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
