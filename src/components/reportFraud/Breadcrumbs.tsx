export default function Breadcrumbs() {
  return (
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
  );
}
