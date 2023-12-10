import { useEffect, useState } from "react";
import "./AccountPage.css";
import { Link, useNavigate } from "react-router-dom";
import EditAccountForm from "../EditAccountForm/EditAccountForm";

const AccountPage = () => {
  const [user, setUser] = useState({});
  const [additionalComponents, setAdditionalComponents] = useState(<></>);
  const [showEditForm, setShowEditForm] = useState(false);

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
        <div className="account-details-container">
          <h3>Your details</h3>
          <p className="account-detail">First Name: {user.firstName}</p>
          <p className="account-detail">Last Name: {user.lastName}</p>
          <p className="account-detail">Email: {user.email}</p>
          <p className="account-detail">
            Booked Events: <Link to={"/my-events"}>Events</Link>
          </p>
          {additionalComponents}
          <button
            className="edit-button"
            onClick={() => setShowEditForm(!showEditForm)}
          >
            Edit
          </button>
        </div>
        {showEditForm && (
          <EditAccountForm
            firstname={user.firstName}
            lastname={user.lastName}
            userEmail={user.email}
            setUser={setUser}
          />
        )}
      </div>
    </div>
  );
};

export default AccountPage;
