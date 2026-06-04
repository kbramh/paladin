import { createRoot } from "react-dom/client";

import Header from "./components/Header";

const root = createRoot(document.getElementById("root")!);
root.render(
  <>
    <Header />
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
        <form>
          <div className="panel-body" id="divMain">
            <div className="form-horizontal"></div>
          </div>
        </form>
      </div>
    </main>
    <div className="business-form-container" id="businessFormContent">
      <div className="horizontal-form" id="report-form">
        <div className="table-sections">
          <div className="vendorName section"></div>
          <div className="vendorName rows">
            <div className="vendorName field"></div>
            <div className="alternative names field"></div>
          </div>
          <br />
          <div className="vendorAddress section"></div>
          <div className="row divAddressInformation">
            <div className="street field"></div>
            <div className="street2 field"></div>
            <div className="unit field"></div>
          </div>
          <div className="row divAddressInformation">
            <div className="city field"></div>
            <div className="state field"></div>
            <div className="zip field"></div>
          </div>
          <div className="row divAddressInformation">
            <div className="county field"></div>
            <div className="country field"></div>
          </div>
          <div className="row divAddressInformation">
            <div className="phoneNumber field"></div>
            <div className="email field"></div>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="bottom-section"></div>
      </div>
    </div>
  </>,
);
