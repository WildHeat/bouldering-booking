import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState([]);

  let navigate = useNavigate();

  const loginRequest = async () => {
    if (!checkNotEmpty()) return;
    await fetch(process.env.REACT_APP_BASE_URL + "/api/v1/auth/authenticate", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        username: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((body) => {
        localStorage.setItem("jwt", body.token);
        localStorage.setItem("loggedin", "true");
        navigate("/");
      })
      .catch((reason) => {
        setErrorMessage(["Failed. Try again."]);
        return;
      });
  };

  const checkNotEmpty = () => {
    setErrorMessage([]);
    let tempErrorMessage = [];
    if (email === "") {
      tempErrorMessage.push("Please enter email");
    }

    if (password === "") {
      tempErrorMessage.push("Please enter password");
    }

    setErrorMessage(tempErrorMessage);

    if (tempErrorMessage.length > 0) return false;
    return true;
  };

  return (
    <div className="login-page-container">
      <div className="login-page-image-container"></div>
      <div className="login-form-container">
        <h2>Login</h2>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Username..."
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password..."
        />
        <div className="error-message">
          {errorMessage.map((error, index) => {
            return <p key={index}>{error}</p>;
          })}
        </div>
        <br />
        <div className="login-button" onClick={loginRequest}>
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
