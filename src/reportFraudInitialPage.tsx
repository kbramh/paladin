import { createRoot } from "react-dom/client";

import Header from "./components/Header";
import ReportFraudForm from "./components/ReportFraudForm";

const root = createRoot(document.getElementById("root")!);
root.render(
  <>
    <Header />
    <ReportFraudForm />
  </>,
);
