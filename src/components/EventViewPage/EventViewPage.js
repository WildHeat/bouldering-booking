import React, { useEffect, useState } from "react";
import "./EventViewPage.css";
import { useNavigate } from "react-router-dom";

const EventViewPage = () => {
  const eventId = window.location.href.split("/events/")[1];
  const [event, setEvent] = useState({ date: "" });
  const [pageTitle, setPageTitle] = useState("Loading event...");
  const [buttonInfo, setButtonInfo] = useState("Sign up!");
  const [aboveButtonText, setAboveButtonText] = useState(
    "What to join this event? Click the button below to book yourself in!"
  );
  const [adminDeleteButton, setAdminDeleteButton] = useState(false);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const handleDeleteEvent = async () => {
    await fetch(process.env.REACT_APP_BASE_URL + `/api/v1/events/${eventId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Event deleted");
          navigate("/events");
          return;
        }
        throw response;
      })
      .catch((response) => {
        alert(`Something went wrong ${response.status}`);
      });
  };

  useEffect(() => {
    const getEvent = async () => {
      await fetch(
        process.env.REACT_APP_BASE_URL + `/api/v1/events/all/${eventId}`
      )
        .then((response) => {
          if (response.status !== 200) {
            throw response;
          }
          return response.json();
        })
        .then((body) => {
          setPageTitle(body.title);
          setEvent(body);
        })
        .catch(() => {
          setPageTitle("Can not find event");
        });
    };
    getEvent();
  }, [eventId]);

  useEffect(() => {
    if (localStorage.getItem("loggedin") === "false") {
      setAboveButtonText(
        "Sign in or register an account to lock in your spot!"
      );
      setButtonInfo("Login!");
      return;
    }

    if (localStorage.getItem("admin") === "true") {
      setAboveButtonText("Want to edit this event? Click the button below!");
      setButtonInfo("Edit!");
      setAdminDeleteButton(true);
    }
  }, []);

  const handleEventClick = () => {
    if (localStorage.getItem("loggedin") === "false") {
      navigate("/login");
      return;
    }
    if (localStorage.getItem("admin") === "true") {
      navigate(`/events/${eventId}/edit`);
      return;
    }
    if (new Date(event.date) < Date.now()) {
      setAboveButtonText("Event has already past. Sorry!");
      return;
    }
    addUserToEvent();
  };

  const addUserToEvent = async () => {
    await fetch(
      process.env.REACT_APP_BASE_URL +
        `/api/v1/events/user/add-user/${eventId}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      }
    )
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          setAboveButtonText("Success! You have been added to the list");
          return response.json();
        } else if (response.status === 409) {
          setAboveButtonText("You're Already signed up! Nice!");
          return response.json();
        } else {
          setAboveButtonText("Something went wrong :(");
          throw response;
        }
      })
      .then((body) => {
        setEvent(body);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  return (
    <div className="event-view-content-container">
      <div className="head-line">
        <h1 className="event-title">{pageTitle}</h1>
        <h3>{event.smallDescription}</h3>
      </div>
      <div className="event-information-container">
        <div className="event-description-container">
          <p className="event-description">{event.description}</p>
          <br />
          <p className="event-description">
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <br />
          <p className="event-description">
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>

        <div className="event-view-right-container">
          <div className="event-information">
            <div className="info date">
              Date:{" "}
              {event.date !== "" && event.date !== null
                ? event.date.split("T")[0]
                : ""}
            </div>
            <div className="info date">
              Time:{" "}
              {event.date !== "" && event.date !== null
                ? event.date.split("T")[1].substring(0, 5)
                : ""}
            </div>
            <div className="info price">Price: £ {event.price}</div>
            <div className="info max-size">Max size: {event.maxSize}</div>
            <div className="info spaces-left">
              Spaces Left: {event.spacesLeft}
            </div>
            <div className="info organiser">Organiser: {event.organiser}</div>
          </div>
          <div className="button-container">
            <p>{aboveButtonText}</p>
            <button
              className="event-button"
              onClick={() => {
                handleEventClick();
              }}
            >
              {buttonInfo}
            </button>
          </div>
          {adminDeleteButton && (
            <button
              className="admin-delete-button"
              onClick={() => toggleModal()}
            >
              Delete
            </button>
          )}
        </div>
      </div>
      {showModal && (
        <div className="modal-container">
          <div className="delete-overlay" onClick={() => toggleModal()}></div>
          <div className="modal">
            <h2>Are you sure you want to delete this event?</h2>
            <button
              className="overlay-delete-button"
              onClick={() => handleDeleteEvent()}
            >
              Yes
            </button>
            <button
              className="overlay-delete-button"
              onClick={() => toggleModal()}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventViewPage;
