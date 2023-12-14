import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  // const registerLogin = useState(<></>);

  const toggle = () => {
    document.getElementsByClassName("header-links")[0].classList.toggle("show");
    document
      .getElementsByClassName("overlay-container")[0]
      .classList.toggle("hidden");
  };

  const closeNavBar = () => {
    document.getElementsByClassName("header-links")[0].classList.remove("show");
    document
      .getElementsByClassName("overlay-container")[0]
      .classList.add("hidden");
  };

  const navigateTo = (location) => {
    closeNavBar();
    navigate(location);
  };

  return (
    <div className="header-container">
      <div className="toggle-container" onClick={toggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div>
        <h2
          className="logo"
          onClick={() => {
            navigateTo("/");
          }}
        >
          AB <span className="bouldering-title">Bouldering</span>
        </h2>
        <div className="overlay-container hidden">
          <div
            className="behind-navbar-overlay"
            onClick={() => closeNavBar()}
          ></div>
        </div>
      </div>
      <div className="header-links">
        <div
          onClick={() => {
            navigateTo("/events");
          }}
        >
          <p className="link">Events</p>
        </div>
        <div
          onClick={() => {
            navigateTo("/climb");
          }}
        >
          <p className="link">Beginner's-guide</p>
        </div>
        <div
          onClick={() => {
            navigateTo("/faq");
          }}
        >
          <p className="link">FAQ</p>
        </div>
        <div
          onClick={() => {
            navigateTo("/contact");
          }}
        >
          <p className="link">Contact</p>
        </div>
        {localStorage.getItem("loggedin") === "true" && (
          <>
            <div
              onClick={() => {
                navigateTo("/my-events");
              }}
            >
              <p className="link">My Events</p>
            </div>
            <div
              onClick={() => {
                navigateTo("/logout");
              }}
            >
              <p className="link">Logout</p>
            </div>
          </>
        )}
      </div>
      <div className="register-and-login-links">
        {localStorage.getItem("loggedin") === "true" ? (
          <div
            onClick={() => {
              navigateTo("/account");
            }}
          >
            <div className="register-container link">
              <h4>My Account</h4>
            </div>
          </div>
        ) : (
          <>
            <div
              onClick={() => {
                navigateTo("/register");
              }}
            >
              <div className="register-container link">
                <h4>Register</h4>
              </div>
            </div>
            <div
              onClick={() => {
                navigateTo("/login");
              }}
            >
              <div className="register-container link">
                <h4>Login</h4>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
