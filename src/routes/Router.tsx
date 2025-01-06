import React from "react";
import { Route, Routes } from "react-router";
import Root from "../pages/Root";
import LandingPage from "../pages/landing-page/LandingPage";

export default function Router() {
  return (
    <Routes>
      <Route index element={<LandingPage />}></Route>
    </Routes>
  );
}
