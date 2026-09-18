import { createRoot } from "react-dom/client";

import Header from "./components/Header";
import ReportFraudStartPage from "./components/Start";

const root = createRoot(document.getElementById("root")!);
root.render(
  <>
    <Header />
    <ReportFraudStartPage />
  </>,
);
