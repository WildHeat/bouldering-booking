import React, { useEffect, useState } from "react";
import "./EventViewPage.css";
import { Link, useNavigate } from "react-router-dom";

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
  const [showLoadingModal, setShowLoadingModal] = useState(false);
  const [loadingHeading, setLoadingHeading] = useState(
    "Please standby while we book you in..."
  );
  const [loadingText, setLoadingText] = useState(
    <p>
      he event will also show up in the{" "}
      <b>
        <Link to={"/my-events"}>My Events</Link>
      </b>{" "}
      page.
    </p>
  );

  const toggleModal = () => setShowModal(!showModal);
  const toggleLoadingModel = () => setShowLoadingModal(!showLoadingModal);

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
    if (event.spacesLeft <= 0) {
      setAboveButtonText("Sorry there are no more spaces left");
      return;
    }
    addUserToEventWithSession();
  };
  const addUserToEventWithSession = async () => {
    if (event.price === 0) {
      setLoadingHeading("Thank you and see you soon!");
      setLoadingText(
        <p>
          You will receieve a confirmation email and the event should show up in
          your
          <b>
            <Link to={"/my-events"}> My Events </Link>
          </b>
          page.
        </p>
      );
    }
    toggleLoadingModel();
    await fetch(
      process.env.REACT_APP_BASE_URL + `/api/v1/stripe/all/${eventId}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      }
    )
      .then((response) => {
        if (response.status === 200) {
          return response.text();
        } else if (response.status === 409) {
          setAboveButtonText("You're Already signed up! Nice!");
          setLoadingHeading("You're Already signed up! Nice!");
          toggleLoadingModel();
        }
        throw response;
      })
      .then((url) => {
        if (url === "") {
          setAboveButtonText("Success! You have been added to the list");
          navigate("/booking-completed");
          return;
        }
        window.open(url);
        setLoadingText(
          <p>
            Once we have received your payment you will receive a comfirmation
            email. The event will also show up in the{" "}
            <b>
              <Link to={"/my-events"}>My Events</Link>
            </b>{" "}
            page.
          </p>
        );
      })
      .catch((response) => {
        console.error(response.status);
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
            Joining AB Bouldering Gym classes offers an exciting blend of
            learning and fun. Led by experienced instructors, these sessions not
            only enhance bouldering skills but also boost overall performance by
            fostering mental resilience and problem-solving abilities. Beyond
            the physical training, the classes create a vibrant community
            atmosphere where participants thrive, pushing boundaries while
            enjoying the thrill of overcoming challenges. It's an opportunity to
            learn, grow, and have an absolute blast along the way!
          </p>
          <br />
          <p className="event-description">
            These classes create an electric, supportive community where
            individuals thrive, pushing personal boundaries and enjoying the
            thrill of conquering challenges. It's an exhilarating journey of
            growth, boosting performance, and creating lasting, joyful memories.
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
      {showLoadingModal && (
        <div className="modal-container">
          <div
            className="delete-overlay"
            onClick={() => toggleLoadingModel()}
          ></div>
          <div className="modal">
            <h2>{loadingHeading}</h2>
            <br />
            {loadingText}
          </div>
          <></>
        </div>
      )}
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
