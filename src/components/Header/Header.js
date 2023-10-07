import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const toggle = () => {
    let element = document.getElementsByClassName("header-links")[0];
    element.classList.toggle("show");
  };

  return (
    <div className="header-container">
      <div className="toggle-container" onClick={toggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <Link to={"/"}>
        <h2 className="logo">
          AB <span className="bouldering-title">Bouldering</span>
        </h2>
      </Link>
      <div className="header-links">
        <Link to={"/events"}>
          <p className="link">Events</p>
        </Link>
        <Link to={"/climb"}>
          <p className="link">Beginner's-guide</p>
        </Link>
        <Link to={"/faq"}>
          <p className="link">FAQ</p>
        </Link>
        <Link to={"/contact"}>
          <p className="link">Contact</p>
        </Link>
      </div>
      <Link to={"/register"}>
        <div className="register-container link">
          <h4>Register</h4>
        </div>
      </Link>
    </div>
  );
};

export default Header;
