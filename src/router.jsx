import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Home,
  Login,
  Register,
  Albums,
  Artists,
  Songs,
  NotFound,
  Contact,
  ForgotPassword,
} from "./pages";
import { Layout, AppContent } from "./layouts";
import { Loading } from "./components";

function Router() {
  const token = useSelector((state) => state.login.token);

  const renderPage = (component) => (
    <AppContent
      page={<Suspense fallback={<Loading />}>{component}</Suspense>}
    />
  );

  const NotAuthRoute = ({ component }) => {
    return token ? <Navigate to="/" replace /> : renderPage(component);
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={renderPage(<Home />)} />
        <Route path="login" element={<NotAuthRoute component={<Login />} />} />
        <Route
          path="register"
          element={<NotAuthRoute component={<Register />} />}
        />
        <Route
          path="forgot-password"
          element={<NotAuthRoute component={<ForgotPassword />} />}
        />
        <Route path="albums" element={renderPage(<Albums />)} />
        <Route path="artists" element={renderPage(<Artists />)} />
        <Route path="songs" element={renderPage(<Songs />)} />
        <Route path="contact" element={renderPage(<Contact />)} />
        <Route path="*" element={renderPage(<NotFound />)} />
      </Route>
    </Routes>
  );
}

export default Router;
