import Breadcrumbs from "./Breadcrumbs";

export default function Start() {
  return (
    <main className="mainbody">
      <Breadcrumbs />
      <div>
        <h3>Disclaimer:</h3>
        <p>
          If you proceed to fill out this report, you agree to abide by our community rules and acknowledge that you
          have read them. Click <a href="/pages/communityRules.html">here</a> to access the community rules page.
        </p>
        <a href="#vendorDetails">
          <button className="report-fraud-main-button" type="button">
            Next
          </button>
        </a>
      </div>
    </main>
  );
}
