import React, { useState } from "react";
import "./ContactPage.css";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const emailformat =
    /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
  const [successMessageStyle, setSuccessMessageStyle] = useState({
    display: "none",
  });

  const handleSubmitContactRequest = async () => {
    setErrorMessage("");
    if (!emailformat.test(email)) {
      setErrorMessage("Please enter a valid email address");
      return;
    }
    if (subject === "") {
      setErrorMessage("Subject can't be empty");
      return;
    }

    if (enquiry === "") {
      setErrorMessage("Enquiry field can't be empty");
      return;
    }

    await fetch(process.env.REACT_APP_BASE_URL + "/api/v1/mail", {
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
    }).then((response) => {
      if (response.status === 200) setSuccessMessageStyle({ display: "block" });
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
            <label>
              Email <span>*</span>
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="contact-input-container">
            <label>
              Subject <span>*</span>
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
          </div>
          <div className="contact-input-container">
            <label>
              Enquiry <span>*</span>
            </label>
            <textarea
              id="enquiry-input"
              type="text"
              value={enquiry}
              onChange={(e) => {
                setEnquiry(e.target.value);
              }}
            />
          </div>
          <p className="error-message">{errorMessage}</p>
          <button
            className="contact-send-button"
            onClick={(e) => {
              e.preventDefault();
              handleSubmitContactRequest();
            }}
          >
            Send
          </button>
        </form>
        <div className="success-overlay" style={successMessageStyle}>
          <div className="success-message">
            <h1>Enquiry submitted</h1>
            <br />
            <p>
              We have received your message and will get back to you as soon as
              possible. Thank you for your patience. :)
            </p>
            <Link to={"/"}>
              <button>Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
