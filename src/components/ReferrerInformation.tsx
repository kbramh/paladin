import { Button, TextField } from "@mui/material";
import { useState } from "react";

enum Step {
  Start,
  VendorDetails,
  FraudDetails,
  ReferrersInformation,
  ReviewAndSubmit,
}

export default function ReportFraudForm() {
  const [step] = useState<Step>(Step.Start);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [info, setInfo] = useState<string>("");

  const [showValidation, setShowValidation] = useState<boolean>(false);

  const nameValid: boolean = !!name;
  const emailValid: boolean = !!email && email.includes("@");
  const phoneValid: boolean = !phoneNumber || /^[0-9]+$/.test(phoneNumber);
  const infoValid: boolean = !!info;

  const onSubmit = () => {
    if (nameValid && emailValid && phoneValid && infoValid) {
      fetch("/api/contact", {
        body: JSON.stringify({ email, info, name, phoneNumber }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      }).then(async (response) => {
        if (response.ok) {
          setName("");
          setEmail("");
          setPhoneNumber("");
          setInfo("");
          setShowValidation(false);
          console.log(await response.text());
        }
      });
    } else {
      setShowValidation(true);
    }
  };

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
      {step === Step.ReferrersInformation && (
        <div>
          <form id="form">
            <TextField
              className="textcontent"
              error={showValidation && !nameValid}
              label="Your name"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setName(event.target.value);
              }}
              required
              type="text"
              value={name}
              variant="outlined"
            />
            <TextField
              className="textcontent"
              error={showValidation && !emailValid}
              label="Your email"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(event.target.value);
              }}
              required
              style={{ marginTop: "1rem" }}
              type="email"
              value={email}
              variant="outlined"
            />
            <TextField
              className="textcontent"
              error={showValidation && !phoneValid}
              label="Your phone number"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPhoneNumber(event.target.value);
              }}
              style={{ marginTop: "1rem" }}
              type="tel"
              value={phoneNumber}
              variant="outlined"
            />
            <TextField
              className="textcontent"
              error={showValidation && !infoValid}
              label="how can we help you?"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setInfo(event.target.value);
              }}
              required
              rows="3"
              style={{ marginTop: "1rem", resize: "vertical" }}
              type="textArea"
              value={info}
              variant="filled"
            />
            <Button id="submitbutton" onClick={onSubmit} style={{ marginTop: "1rem" }} variant="contained">
              SEND MESSAGE
            </Button>
          </form>
        </div>
      )}
    </main>
  );
}
