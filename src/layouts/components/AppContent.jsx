import { Outlet } from "react-router-dom";

function AppContent({ page }) {
  return (
    <div>
      {page}
      <Outlet />
    </div>
  );
}

export default AppContent;
