import { useState } from "react";

enum Step {
  Start,
  VendorDetails,
  FraudDetails,
  ReferrersInformation,
  ReviewAndSubmit,
}

export default function ReportFraudStartPage() {
  const [step, setStep] = useState<Step>(Step.Start);

  return (
    <main className="mainbody">
      <div className="body-content-main-container" id="divBodyContent">
        <div className="panel-heading">
          <ol className="breadcrumb">
            <li>
              <a className="breadcrumb" href="#" title="Start">
                Start
              </a>
            </li>
            <li>
              <span className="breadcrumb">/ Vendor Details /</span>
            </li>
            <li>
              <span className="breadcrumb">Fraud Details /</span>
            </li>
            <li>
              <span className="breadcrumb">Referrer&apos;s Information /</span>
            </li>
            <li>
              <span className="breadcrumb">Review & Submit</span>
            </li>
          </ol>
        </div>
      </div>
      {step === Step.Start && (
        <div>
          <h3>Disclaimer:</h3>
          <p>
            If you proceed to fill out this report, you agree to abide by our community rules and acknowledge that you
            have read them. Click <a href="/pages/communityRules.html">here</a> to access the community rules page.
          </p>
        </div>
      )}
    </main>
  );
}
