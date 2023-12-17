import React, { useState } from "react";
import "./ContactPage.css";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [enquiry, setEnquiry] = useState("");

  const handleSubmitContactRequest = () => {
    fetch(process.env.REACT_APP_BASE_URL + "/api/v1/mail", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: enquiry,
      }),
    });
  };
  return (
    <div className="contact-page-container">
      <div className="contact-content-container">
        <h1>Contact AB Bouldering</h1>
        <p>
          If you have questions about AB bouldering or want to discuss your
          previous experience at ABB please fill out the form below and we'll be
          in touch! You may find the answer to your question in the{" "}
          <Link to={"/faq"}>
            <u>FAQ</u>
          </Link>{" "}
          page.
        </p>
        <form className="contact-form-container">
          <div className="contact-input-container">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="contact-input-container">
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="contact-input-container">
            <label>Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
          </div>
          <div className="contact-input-container">
            <label>Enquiry</label>
            <textarea
              id="enquiry-input"
              type="text"
              value={enquiry}
              onChange={(e) => {
                setEnquiry(e.target.value);
              }}
            />
          </div>
          <div className="contact-send-button">Send</div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
