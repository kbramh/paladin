import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router";

import Header from "./components/Header";
import FraudDetails from "./components/reportFraud/FraudDetails";
import Intro from "./components/reportFraud/Intro";
import ReferrerInformation from "./components/reportFraud/ReferrerInformation";
import ReviewAndSubmit from "./components/reportFraud/ReviewAndSubmit";
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
      <Route element={<FraudDetails />} path="/fraudDetails" />
      <Route element={<ReferrerInformation />} path="/referrerInformation" />
      <Route element={<ReviewAndSubmit />} path="/reviewAndSubmit" />
    </Routes>
  </HashRouter>,
);
