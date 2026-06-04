import { TextField, Button } from "@mui/material";
import { useState } from "react";

export default function ContactUsForm() {
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
      console.log("form submitted");
      setName("");
      setEmail("");
      setPhoneNumber("");
      setInfo("");
      setShowValidation(false);
    } else {
      setShowValidation(true);
    }
  };

  return (
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
        style={{ resize: "vertical", marginTop: "1rem" }}
        type="textArea"
        value={info}
        variant="filled"
      />
      <Button id="submitbutton" onClick={onSubmit} style={{ marginTop: "1rem" }} variant="contained">
        SEND MESSAGE
      </Button>
    </form>
  );
}
