import React, { useEffect, useState } from "react";
import EventForm from "../EventForm/EventForm";

const CreateEventPage = () => {
  const [listOfAdminNames, setListOfAdminNames] = useState([]);
  const [responseMessage, setResponseMessage] = useState([]);
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
  }, []);

  const eventChecks = () => {
    let errorMessage = [];
    if (event.title === "") {
      errorMessage.push("Title cannot be empty");
    }
    if (event.description === "") {
      errorMessage.push("Description cannot be empty");
    }

    if (event.smallDescription === "") {
      errorMessage.push("Small description cannot be empty");
    }
    if (event.maxSize < 1) {
      errorMessage.push("Max size must be more than 0");
    }

    if (new Date(event.date) - Date.now() < 0) {
      errorMessage.push("Event must be in the future");
    }
    if (event.organiser === "") {
      errorMessage.push("Please select an organiser");
    }
    setResponseMessage(errorMessage);
    if (errorMessage.length > 0) {
      return false;
    }
    return true;
  };

  const handleSubmitnewEvent = async () => {
    if (!eventChecks()) {
      return;
    }

    await fetch(process.env.REACT_APP_BASE_URL + "/api/v1/events", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({ ...event }),
    })
      .then((response) => {
        if (response !== 201) {
          throw response;
        }
        return response.json();
      })
      .then((body) => {
        setEvent({ ...body });
        let errorMessage = [];
        errorMessage.push("Success");
        setResponseMessage(errorMessage);
      })
      .catch((response) => {
        console.log(response.status);
      });
  };

  return (
    <div className="create-event-page-container">
      <h1>Create New Event</h1>
      <EventForm
        event={event}
        setEvent={setEvent}
        listOfAdminNames={listOfAdminNames}
      />
      {responseMessage.map((message) => {
        return <p>{message}</p>;
      })}
      <div
        className="submit-form-button"
        onClick={() => {
          handleSubmitnewEvent();
        }}
      >
        Submit
      </div>
    </div>
  );
};

export default CreateEventPage;
