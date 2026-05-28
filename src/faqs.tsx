import { createRoot } from "react-dom/client";
import Header from "./components/Header";

const root = createRoot(document.getElementById("root")!);
root.render(
  <>
    <Header />
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <p className="subtitle">Commonly asked questions and answers:</p>

      <ul className="faq-list">
        <li>
          <strong>What types of fraud can I report?</strong>
          <span className="answer">
            You can report any type of suspected fraud related to businesses - whether they are engaging in illegal
            activity that effects you or not. Some examples include scams, running illegal fenced goods operations, etc.
          </span>
        </li>
        <li>
          <strong>How do I submit a fraud report?</strong>
          <span className="answer">
            Click the &quot;Report Fraud&quot; button at the top of the page in the navigation bar, then click the green
            &quot;proceed&quot; button after you read the text on that page.You’ll receive a confirmation email with a
            report reference number.
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
            Most reports are reviewed within 3-5 business days. Complex cases may take longer. You can track the status
            of your report using your report reference number.
          </span>
        </li>
        <li>
          <strong>Can I report fraud anonymously?</strong>
          <span className="answer">
            No, you cannot submit a report without providing contact details (phone number or email).
          </span>
        </li>
      </ul>
    </div>
  </>,
);
