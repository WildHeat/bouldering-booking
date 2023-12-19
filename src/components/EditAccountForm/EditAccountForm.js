import React, { useState } from "react";
import "./EditAccountForm.css";

const EditAccountForm = ({ firstname, lastname, userEmail, setUser }) => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [firstName, setFirstName] = useState(firstname);
  const [lastName, setLastName] = useState(lastname);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmitEditedDetails = async () => {
    setStatusMessage("");
    if (firstName === undefined || firstName === "") {
      setStatusMessage("First name cannot be blank");
      return;
    }

    if (lastName === undefined || lastName === "") {
      setStatusMessage("Last name cannot be blank");
      return;
    }

    if (password === "") {
      setStatusMessage("Enter your current password");
      return;
    }

    if (showNewPassword && newPassword === "") {
      setStatusMessage("Enter a new password");
      return;
    }

    let editUser = {
      email: userEmail,
      firstName: firstName,
      lastName: lastName,
      oldPassword: password,
    };

    if (showNewPassword) {
      editUser.password = newPassword;
    }
    await fetch(process.env.REACT_APP_BASE_URL + "/api/v1/users", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify(editUser),
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw response;
      })
      .then((body) => {
        setUser(body);
        setStatusMessage("Updated!");
      })
      .catch(() => {
        setStatusMessage("Failed. Check password is correct");
        return;
      });
  };

  return (
    <div className="edit-account-form-contaner">
      <form className="edit-account-form">
        <h3>Edit your credentials</h3>
        <div>
          <label htmlFor="first-name">First name:</label>
          <input
            id="first-name"
            autoComplete="first-name"
            type="text"
            placeholder=""
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="last-name">Last name:</label>
          <input
            id="last-name"
            autoComplete="last-name"
            type="text"
            placeholder=""
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <p className="change-password">
          <u>
            <i
              onClick={() => {
                setShowNewPassword(!showNewPassword);
              }}
            >
              change password?
            </i>
          </u>
        </p>
        <div>
          <label htmlFor="current-password">Enter your password:</label>
          <input
            id="current-password"
            autoComplete="current-password"
            type="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {showNewPassword && (
          <div>
            <label htmlFor="new-password">New password:</label>
            <input
              id="new-password"
              autoComplete="new-password"
              type="password"
              placeholder=""
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />
          </div>
        )}

        <p id="status-message">{statusMessage}</p>

        <button
          className="submit-edit-button"
          onClick={(e) => {
            e.preventDefault();
            handleSubmitEditedDetails();
          }}
        >
          Submit new credentials
        </button>
      </form>
    </div>
  );
};

export default EditAccountForm;
