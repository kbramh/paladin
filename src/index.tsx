import { createRoot } from "react-dom/client";

import Header from "./components/Header";

const root = createRoot(document.getElementById("root")!);
root.render(
  <>
    <Header />
    <main>
      <div className="center-ribbon">
        <h1>Spot Fraud? Report it here!</h1>
        <div>
          <h2>Join thousands reporting scams every day</h2>
        </div>
        <div>
          <h3>FOR THOSE WHO WISH TO MAKE A DIFFERENCE</h3>
        </div>
      </div>
    </main>
  </>,
);
