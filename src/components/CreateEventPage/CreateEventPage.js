import React, { useEffect, useState } from "react";
import EventForm from "../EventForm/EventForm";

const CreateEventPage = () => {
  const [listOfAdminNames, setListOfAdminNames] = useState([]);
  const [responseMessage, setResponseMessage] = useState("");
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

  const eventChecks = () => {};

  const handleSubmitnewEvent = async () => {
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
      })
      .catch((response) => {
        console.log(response.status);
      });
  };

  return (
    <div>
      <h1>Create New Event</h1>
      <EventForm
        event={event}
        setEvent={setEvent}
        listOfAdminNames={listOfAdminNames}
      />
      {responseMessage}
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
