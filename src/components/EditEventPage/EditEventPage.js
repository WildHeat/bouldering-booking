import React, { useEffect, useState } from "react";
import "./EditEventPage.css";
import EventForm from "../EventForm/EventForm";

const EditEventPage = () => {
  const eventId = window.location.href.split("/")[4];
  const [listOfAdminNames, setListOfAdminNames] = useState([]);
  const [responseMessage, setResponseMessage] = useState("");
  const [successMessageStyle, setSuccessMessageStyle] = useState({
    display: "none",
  });
  const [event, setEvent] = useState({
    id: undefined,
    title: "",
    description: "",
    smallDescription: "",
    price: 0,
    maxSize: 1,
    date: Date.now(),
    organiser: "",
    imageUrl: "",
  });

  useEffect(() => {
    const getEvent = async () => {
      await fetch(
        process.env.REACT_APP_BASE_URL + `/api/v1/events/all/${eventId}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      )
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
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

    const listOfAdmins = async () => {
      await fetch(
        process.env.REACT_APP_BASE_URL + "/api/v1/users/get-all-admin",
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
        .then((response) => {
          if (response.status !== 200) {
            throw response;
          }
          return response.json();
        })
        .then((body) => {
          setListOfAdminNames([...body]);
        })
        .catch((response) => {
          console.log(response);
        });
    };
    listOfAdmins();
    getEvent();
  }, [eventId]);

  const handleSubmitEditEvent = async () => {
    setResponseMessage("Loading...");
    await fetch(process.env.REACT_APP_BASE_URL + "/api/v1/events", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({ ...event }),
    })
      .then((response) => {
        if (response.status === 200) {
          setResponseMessage("Updated!");
          setSuccessMessageStyle({ display: "block" });
        } else {
          throw response;
        }
      })
      .catch((response) => {
        setResponseMessage(response.body);
        console.log(response.status);
      });
  };

  return (
    <div className="admin-event-page-container">
      <div
        className="updated-event-overlay"
        style={successMessageStyle}
        onClick={() => {
          setSuccessMessageStyle({
            display: "none",
          });
        }}
      >
        <div className="updated-event-content">
          <h3>Event updated!</h3>
        </div>
      </div>
      <h1>Edit Event - {eventId}</h1>
      <EventForm
        event={event}
        setEvent={setEvent}
        listOfAdminNames={listOfAdminNames}
      />
      <div className="response-message">{responseMessage}</div>
      <div
        className="submit-form-button"
        onClick={() => {
          handleSubmitEditEvent();
        }}
      >
        Submit
      </div>
    </div>
  );
};

export default EditEventPage;
