import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Index";
import Login from "./pages/login/Index";
import Register from "./pages/register/Index";
import Albums from "./pages/albums/Index";
import Artists from "./pages/artists/Index";
import Songs from "./pages/songs/Index";
import NotFound from "./pages/404/Index";
import Contact from "./pages/contact/Index";
import ForgotPassword from "./pages/forgotPassword/Index";
import Layout from "./layouts/Layout";
import AppContent from "./layouts/components/AppContent";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AppContent page={<Home />} />} />
        <Route path="login" element={<AppContent page={<Login />} />} />
        <Route path="register" element={<AppContent page={<Register />} />} />
        <Route path="albums" element={<AppContent page={<Albums />} />} />
        <Route path="artists" element={<AppContent page={<Artists />} />} />
        <Route path="songs" element={<AppContent page={<Songs />} />} />
        <Route path="contact" element={<AppContent page={<Contact />} />} />
        <Route
          path="forgot-password"
          element={<AppContent page={<ForgotPassword />} />}
        />
        <Route path="*" element={<AppContent page={<NotFound />} />} />
      </Route>
    </Routes>
  );
}

export default Router;
