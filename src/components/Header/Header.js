import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

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

  const logout = () => {
    localStorage.setItem("jwt", "");
    localStorage.setItem("loggedin", false);
    localStorage.setItem("admin", false);
    navigate("/");
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
      </div>
      <div className="register-and-login-links">
        {localStorage.getItem("loggedin") === "true" ? (
          <div className="dropdown">
            <button className="dropdown-button">Account ▼</button>
            <div className="content">
              <div
                className="dropdown-link"
                onClick={() => {
                  navigateTo("/my-events");
                }}
              >
                <p>My Events</p>
              </div>
              <div
                className="dropdown-link"
                onClick={() => {
                  navigateTo("/account");
                }}
              >
                <p>My Account</p>
              </div>
              <div
                className="dropdown-link"
                onClick={() => {
                  logout();
                }}
              >
                <p>Logout</p>
              </div>
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
