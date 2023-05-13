import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Index";
import Login from "./pages/login/Index";
import Register from "./pages/register/Index";
import NotFound from "./pages/404/Index";
import Layout from "./layouts/Layout";
import AppContent from "./layouts/components/AppContent";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AppContent page={<Home />} />} />
        <Route path="login" element={<AppContent page={<Login />} />} />
        <Route path="register" element={<AppContent page={<Register />} />} />
        <Route path="*" element={<AppContent page={<NotFound />} />} />
      </Route>
    </Routes>
  );
}

export default Router;
