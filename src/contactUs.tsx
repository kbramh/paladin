import { createRoot } from "react-dom/client";

import ContactUsForm from "./components/ContactUsForm";
import Header from "./components/Header";

const root = createRoot(document.getElementById("root")!);
root.render(
  <>
    <Header />
    <div className="contact-container">
      <div className="content">
        <div className="form-side">
          <h1>Get in Touch</h1>
          <p>We&apos;re here to help &mdash; drop us a message!</p>
          <ContactUsForm />
        </div>
      </div>
    </div>
  </>,
);
