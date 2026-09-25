import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router";

import Header from "./components/Header";
import Intro from "./components/reportFraud/Intro";
import Start from "./components/reportFraud/Start";
import VendorDetails from "./components/reportFraud/VendorDetails";

const root = createRoot(document.getElementById("root")!);
root.render(
  <HashRouter>
    <Header />
    <Routes>
      <Route element={<Intro />} path="/" />
      <Route element={<Start />} path="/start" />
      <Route element={<VendorDetails />} path="/vendorDetails" />
    </Routes>
  </HashRouter>,
);
