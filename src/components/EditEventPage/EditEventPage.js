import React, { useEffect, useState } from "react";
import "./EditEventPage.css";
import EventForm from "../EventForm/EventForm";

const EditEventPage = () => {
  const eventId = window.location.href.split("/")[4];
  const [listOfAdminNames, setListOfAdminNames] = useState([]);
  const [event, setEvent] = useState({
    id: undefined,
    title: "",
    description: "",
    smallDescription: "",
    price: 0,
    maxSize: 1,
    date: Date.now(),
    organiser: "",
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
          console.log(body);
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
    console.log(event);

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
          console.log("UPDATED!");
        } else {
          throw response;
        }
      })
      .catch((response) => {
        console.log(response.status);
      });
  };

  return (
    <div className="admin-event-page-container">
      AdminEventPage {eventId}
      <EventForm
        event={event}
        setEvent={setEvent}
        listOfAdminNames={listOfAdminNames}
      />
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
