export default function Header() {
  return (
    <header className="navbar">
      <a className="logoAnchorTag" href="/">
        <div className="logo">Logo</div>
      </a>
      <nav className="nav-right">
        <div className="topnav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/pages/reportFraud.html">Report Fraud</a>
            </li>
            <li>
              <a href="/pages/communityRules.html">Community Rules</a>
            </li>
            <li>
              <a href="/pages/faqs.html">FAQs</a>
            </li>
            <li>
              <a href="/pages/contactUs.html">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="right-icons">
          <a href="#">🔍</a>
        </div>
      </nav>
    </header>
  );
}
