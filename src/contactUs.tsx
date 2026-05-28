import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import { TextField, Button } from "@mui/material";

const root = createRoot(document.getElementById("root")!);
root.render(
  <>
    <Header />
    <div className="contact-container">
      <div className="content">
        <div className="form-side">
          <h1>Get in Touch</h1>
          <p>We're here to help &mdash; drop us a message!</p>
          <form id="form">
            <TextField className="textcontent" label="Your name" required type="text" variant="outlined" />
            <TextField className="textcontent" label="Your email" required type="email" variant="outlined" />
            <TextField className="textcontent" label="Your phone number" type="tel" variant="outlined" />
            <TextField
              className="textcontent"
              label="how can we help you?"
              required
              rows="3"
              style={{ resize: "vertical" }}
              type="textArea"
              variant="filled"
            />
            <Button id="submitbutton" variant="contained">
              SEND MESSAGE
            </Button>
          </form>
        </div>
      </div>
    </div>
  </>,
);
