export default function Intro() {
  return (
    <main className="mainbody">
      <div id="divBodyContent">
        <form>
          <div className="panel-header">
            <span className="panel-title" style={{ fontSize: "x-large" }}>
              Web Referral
            </span>
          </div>
          <br />
          <div className="panel-body">
            <p>
              If you know of a business or individual commiting fraud in Washington State, we would like to know about
              it. In addition to reporting on other crimes, Paladin is commited to identifying and reporting
              organizations and people that engage in fraud. If you have knowledge of a fradulant activity going on, you
              can report it using any of the following methods:
            </p>
            <ul className="reporting-options">
              <li>Complete and submit the following Online Referral Form</li>
              <li>
                If the fraud you have discovered is abuse relating to Washington State public benefits programs, you
                should mail a written complaint to:
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
            <a href="#start">
              <button className="report-fraud-main-button" type="button">
                Proceed
              </button>
            </a>
          </div>
        </form>
      </div>
    </main>
  );
}
