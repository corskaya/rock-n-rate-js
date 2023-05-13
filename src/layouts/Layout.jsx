import AppHeader from "./components/AppHeader";
import AppContent from "./components/AppContent";

function Layout() {
  return (
    <div>
      <div>
        <AppHeader />
      </div>
      <div>
        <AppContent />
      </div>
    </div>
  );
}

export default Layout;
