import { createRoot } from "react-dom/client";

import Header from "./components/Header";
import ReportFraudIntro from "./components/reportFraud/reportFraudIntro";

const root = createRoot(document.getElementById("root")!);
root.render(
  <>
    <Header />
    <ReportFraudIntro />
  </>,
);
