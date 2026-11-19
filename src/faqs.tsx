import { createRoot } from "react-dom/client";

import Header from "./components/Header";

const root = createRoot(document.getElementById("root")!);
root.render(
  <>
    <Header />
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <h3 className="subtitle">Commonly asked questions and answers:</h3>

      <ul className="faq-list">
        <li>
          <strong>What types of crime can I report?</strong>
          <span className="answer">
            You can report any type of crime - whether it is an illegal activity that effects you or not. In cases where
            it is appropriate, make sure you file a police report/dial 911.
          </span>
        </li>
        <li>
          <strong>How do I submit a report?</strong>
          <span className="answer">
            Click the &quot;Report Crime&quot; or &quot;Report Fraud&quot; button (depending on what type of crime you
            are reporting) at the top of the page in the navigation bar. Then click the &quot;proceed&quot; button after
            you read the text on the following page to get started on filing your report.
          </span>
        </li>
        <li>
          <strong>Is my personal information kept confidential?</strong>
          <span className="answer">
            Yes. All reports are handled securely and confidentially. We comply with strict privacy laws and never share
            your information without your consent.
          </span>
        </li>
        <li>
          <strong>How long does it take to process my report?</strong>
          <span className="answer">
            Most reports are reviewed within 5-10 business days. Complex cases usually take longer. You can track the
            status of your report using a report reference number that is included in a confirmation email sent to you
            once you submit a report.
          </span>
        </li>
        <li>
          <strong>Can I report a crime anonymously?</strong>
          <span className="answer">
            No, you cannot submit a report without providing contact details (phone number or email).
          </span>
        </li>
      </ul>
    </div>
  </>,
);
