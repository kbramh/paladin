import { createRoot } from "react-dom/client";

import Header from "./components/Header";

const root = createRoot(document.getElementById("root")!);
root.render(
  <>
    <Header />
    <main>
      <div>
        <h2 className="communityrules-h2-header">Community Rules that we abide by on Paladin</h2>
        <div>
          <h3 className="communityrules-h3-header">
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
                <strong>Be Specific:</strong> Vague claims like &quot;this place is a scam&quot; or &quot;a man on the
                street near Seattle&apos;s baseball stadium robbed the nearby mini mart last week&quot; will be removed.
                When you file a report, there will be a section where you can include dates, the specific
                action/context, and the overall nature of the alledged crime.
              </li>
              <li>
                <strong>Documentation:</strong> We strongly encourage users to mention (but you MUST redact personal
                info from supporting evidence).
              </li>
            </div>
            <div>
              <h4>2. No Doxxing or PII (Personally Identifiable Information)</h4>
            </div>
            <div>
              <li>
                <strong>For Crimes near Businesses/Institutions:</strong> You may share the entity name, address, &
                public-facing contact information if the crime occured near such a place or directly involves them in
                some way.
              </li>
              <li>
                <strong>No Private Data:</strong> Do not post the home addresses, personal phone numbers, or social
                media profiles of individuals related to the crime.
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
                <strong>Conflict of Interest:</strong> If you report business fraud and are a competetitor of the
                business you are reporting, you must disclose this relationship.
              </li>
            </div>
            <div>
              <h4>4. Zero Tolerance for Harrassment</h4>
            </div>
            <div>
              <li>
                <strong>No Incitement:</strong> The goal is reporting, not vigilantism. Do not call for
                &quot;raids&quot;, physical harrassment, vandalism, or other such acts against those who engaged in
                illegal activity.
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
                <strong>The &quot;Good Faith&quot; Clause:</strong> By posting, you affirm that your report is true to
                the best of your knowledge.
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
