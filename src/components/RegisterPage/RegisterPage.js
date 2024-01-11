import React, { useState } from "react";
import "./RegisterPage.css";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState([]);
  const emailformat =
    /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;

  let navigate = useNavigate();

  async function register() {
    setErrorMessage([]);
    let errors = [];

    if (firstName === "") {
      errors.push("First name can not be empty");
    }

    if (lastName === "") {
      errors.push("Last name can not be empty");
    }

    if (password.length < 8) {
      errors.push("Password needs to be 8 characters or longer");
    }

    if (!/\d/.test(password)) {
      errors.push("Password needs to contain at least 1 number");
    }

    if (!/[A-Z]/.test(password)) {
      errors.push("Password needs contain at least 1 uppercase letter");
    }

    if (!/[a-z]/.test(password)) {
      errors.push("Password needs contain at least 1 lowercase letter");
    }
    if (!emailformat.test(email)) {
      errors.push("Please enter a valid email address");
    }

    if (/\s/.test(email)) {
      errors.push("Email can't contain any spaces");
    }

    if (password !== confirmPassword) {
      errors.push("Password and confirm password doesn't match");
    }

    setErrorMessage(errors);

    if (errors.length > 0) return;

    await fetch(process.env.REACT_APP_BASE_URL + "/api/v1/auth/register", {
      headers: {
        "Content-type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.status === 201) {
          return response.json();
        }
        throw response.text();
      })
      .then((body) => {
        localStorage.setItem("jwt", body.token);
        localStorage.setItem("loggedin", "true");
        navigate("/");
      })
      .catch((response) => {
        setErrorMessage([`Failed register - ${response}`]);
        console.error(response);
      });
  }

  return (
    <div className="register-page-container">
      <div className="register-form-container">
        <h2>Register</h2>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter First Name..."
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter Last Name..."
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email..."
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password..."
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password..."
        />
        {errorMessage.map((error) => {
          return (
            <div key={error}>
              - {error}
              <br />
            </div>
          );
        })}
        <br />
        <div className="register-button" onClick={() => register()}>
          Register
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
