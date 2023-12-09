import { useEffect, useState } from "react";
import "./AccountPage.css";
import { Link, useNavigate } from "react-router-dom";

const AccountPage = () => {
  const [user, setUser] = useState({});
  const [additionalComponents, setAdditionalComponents] = useState(<></>);

  const navigate = useNavigate();

  useEffect(() => {
    if (
      localStorage.getItem("jwt") === null ||
      localStorage.getItem("jwt") === undefined ||
      localStorage.getItem("jwt") === ""
    ) {
      localStorage.setItem("jwt", "");
      localStorage.setItem("loggedin", false);
      localStorage.setItem("admin", false);
      navigate("/login");
      return;
    }

    const checkUser = async () => {
      await fetch(process.env.REACT_APP_BASE_URL + "/api/v1/users/get-user", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          throw response;
        })
        .then((user) => {
          setUser(user);
          if (user.role === "ADMIN") {
            setAdditionalComponents(
              <p className="account-detail">
                <Link to={"/register-admin"}>Register a new Admin?</Link>
              </p>
            );
          }
        });
    };
    checkUser();
  }, [navigate]);

  return (
    <div className="account-page-container">
      <h1>My Account</h1>

      <div className="account-content-container">
        <p className="account-detail">First Name: {user.firstName}</p>
        <p className="account-detail">Last Name: {user.lastName}</p>
        <p className="account-detail">Email: {user.email}</p>
        <p className="account-detail">
          Booked Events: <Link to={"/my-events"}>Events</Link>
        </p>
        {additionalComponents}
      </div>
    </div>
  );
};

export default AccountPage;
