import { TextField, Button } from "@mui/material";
import { useState } from "react";

export default function ContactUsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [info, setInfo] = useState("");

  return (
    <form id="form">
      <TextField
        className="textcontent"
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
        label="Your phone number"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPhoneNumber(event.target.value);
        }}
        required
        style={{ marginTop: "1rem" }}
        type="tel"
        value={phoneNumber}
        variant="outlined"
      />
      <TextField
        className="textcontent"
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
      <Button id="submitbutton" style={{ marginTop: "1rem" }} variant="contained">
        SEND MESSAGE
      </Button>
    </form>
  );
}
