import { createRoot } from "react-dom/client";
import Header from "./components/Header";

const root = createRoot(document.getElementById("root")!);
root.render(
  <>
    <Header />
    <main className="mainbody">
      <div className="body-content-main-container" id="divBodyContent">
        <form>
          <div className="panel-header">
            <span className="panel-title" style={{ fontSize: "x-large" }}>
              Web Referral
            </span>
          </div>
          <br />
          <div className="panel-body">
            <p>
              If you know of a business commiting fraud in Washington State, we would like to know about it. Paladin is
              commited to identifying and reporting organizations that engage in fraud. If you have knowledge of a
              fradulant activity going on, you can report it using any of the following methods:
            </p>
            <ul className="reporting-options">
              <li>Complete and submit this Online Referral Form</li>
              <li>
                If the fraud you have discovered is regarding Washington State public benefits programs, mail your
                written complaint to:
              </li>
            </ul>
            <p style={{ marginLeft: "60px" }}>
              Public Benefits Program Fraud
              <br />
              P.O. Box 45817
              <br />
              Olympia, WA 98504-5817
              <br />
            </p>
            <a href="/pages/deeper-pages/reportFraudWebReferralForm.html">
              <button type="button" className="report-fraud-main-button">
                Proceed
              </button>
            </a>
          </div>
        </form>
      </div>
    </main>
  </>,
);
