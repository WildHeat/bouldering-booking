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
        <p className="link">Events</p>
        <Link to={"/climb"}>
          <p className="link">Beginner's-guide</p>
        </Link>
        <p className="link">FAQ</p>
        <p className="link">Contact</p>
      </div>
      <div className="register-container link">
        <h4>Register</h4>
      </div>
    </div>
  );
};

export default Header;
