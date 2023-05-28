import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
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

function Router() {
  const renderPage = (component) => (
    <AppContent
      page={<Suspense fallback={<div>Loading...</div>}>{component}</Suspense>}
    />
  );

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={renderPage(<Home />)} />
        <Route path="login" element={renderPage(<Login />)} />
        <Route path="register" element={renderPage(<Register />)} />
        <Route path="albums" element={renderPage(<Albums />)} />
        <Route path="artists" element={renderPage(<Artists />)} />
        <Route path="songs" element={renderPage(<Songs />)} />
        <Route path="contact" element={renderPage(<Contact />)} />
        <Route
          path="forgot-password"
          element={renderPage(<ForgotPassword />)}
        />
        <Route path="*" element={renderPage(<NotFound />)} />
      </Route>
    </Routes>
  );
}

export default Router;
