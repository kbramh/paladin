import { createRoot } from "react-dom/client";
import Header from "./components/Header";

const root = createRoot(document.getElementById("root")!);
root.render(
  <>
    <Header />
    <main>
      <div>
        <h2>Community Rules that we abide by on Paladin</h2>
        <div>
          <h3>
            Warning: failure to follow our community rules will result in a penality, the nature of which determines the
            severity of the consequence.
          </h3>
        </div>
        <div>
          <ul>
            <li>We are not a rumor mill. Every report must be backed by verifiable details!</li>
            <div>
              <h4>1. Evidence Based Reporting</h4>
            </div>
            <div>
              <li>
                <strong>Be Specific:</strong> Vague claims like "this place is a scam" will be removed. When you file a
                report, there will be a section where you can include dates, specific services/products, and the overall
                nature of the alledged fraud.
              </li>
              <li>
                <strong>Documentation:</strong> We strongly encourage users to mention (but you MUST redact personal
                info from supporting evidence like receipts, contracts, or email chains.
              </li>
            </div>
            <div>
              <h4>2. No Doxxing or PII (Personally Identifiable Information)</h4>
            </div>
            <div>
              <li>
                <strong>Business Info Only:</strong> You may share the business name, address, & public-facing contact
                information.
              </li>
              <li>
                <strong>No Private Data:</strong> Do not post the home addresses, personal phone numbers, or private
                social media profiles of employees or owners.
              </li>
            </div>
            <div>
              <h4>3. Verification of Identity</h4>
            </div>
            <div>
              <li>
                <strong>Verified Accounts:</strong> Users must verify their email or phone number before posting a
                report
              </li>
              <li>
                <strong>Conflict of Interest:</strong> If you are a competetitor of the business you are reporting, you
                must disclose this relationship.
              </li>
            </div>
            <div>
              <h4>4. Zero Tolerance for Harrassment</h4>
            </div>
            <div>
              <li>
                <strong>No Incitement:</strong> The goal is reporting, not vigilantism. Do not call for "raids",
                physical harrassment, vandalism, or other illegal acts against the business.
              </li>
              <li>
                <strong>Civil Discourse:</strong> Use professional language. Profanity or hate speech will result in a
                ban.
              </li>
            </div>
            <div>
              <h4>5. Truthfulness & Legal Liability</h4>
            </div>
            <div>
              <li>
                <strong>The "Good Faith" Clause:</strong> By posting, you affirm that your report is true to the best of
                your knowledge.
              </li>
              <li>
                <strong>Personal Responsibility:</strong> Users are legally responsible for the content they post.
              </li>
            </div>
          </ul>
        </div>
      </div>
    </main>
  </>,
);
