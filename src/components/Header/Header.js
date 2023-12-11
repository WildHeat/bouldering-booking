import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  const toggle = () => {
    let element = document.getElementsByClassName("header-links")[0];
    element.classList.toggle("show");
  };

  const closeNavBar = () => {
    let element = document.getElementsByClassName("header-links")[0];
    element.classList.remove("show");
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
      <div
        onClick={() => {
          navigateTo("/");
        }}
      >
        <h2 className="logo">
          AB <span className="bouldering-title">Bouldering</span>
        </h2>
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
        <Link to={"/faq"}>
          <p className="link">FAQ</p>
        </Link>
        <Link to={"/contact"}>
          <p className="link">Contact</p>
        </Link>
      </div>
      <div className="register-and-login-links">
        <Link to={"/register"}>
          <div className="register-container link">
            <h4>Register</h4>
          </div>
        </Link>
        <Link to={"/login"}>
          <div className="register-container link">
            <h4>Login</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
