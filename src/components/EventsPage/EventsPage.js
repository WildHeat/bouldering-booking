import React, { useEffect, useState } from "react";
import "./EventsPage.css";
import Event from "./Event";
import { useNavigate } from "react-router-dom";

const EventsPage = () => {
  let navigate = useNavigate();
  const [listOfEvent, setListOfEvents] = useState([]);
  const [editButton, setEditButton] = useState(<></>);

  useEffect(() => {
    const getAllEvents = async () => {
      await fetch(process.env.REACT_APP_BASE_URL + "/api/v1/events/all", {
        method: "get",
      })
        .then((response) => {
          if (response.status === 403) {
            throw response;
          }
          return response.json();
        })
        .then((body) => {
          setListOfEvents(body);
        })
        .catch((response) => {});
    };
    getAllEvents();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("admin") === "true") {
      setEditButton(
        <button
          className="admin-edit-button"
          onClick={() => navigate("/events/create")}
        >
          Add new Event
        </button>
      );
    }
  }, [navigate]);

  return (
    <div className="events-page-container">
      <div className="image-container">
        <div className="overlay">
          <div className="overlay-content-container">
            <h1>Events</h1>
          </div>
        </div>
      </div>
      <div className="events-content-container">
        <h1>What Events are happening?</h1>
        <div className="all-events-container">
          {listOfEvent.map((eve, index) => {
            let date = "";
            let time = "";
            if (eve.date !== null && eve.date !== undefined) {
              date = eve.date.split("T")[0];
              time = eve.date.split("T")[1].substring(0, 5);
            }

            return (
              <Event
                eventId={eve.id}
                title={eve.title}
                description={eve.smallDescription}
                key={index}
                url={eve.imageUrl}
                date={date}
                time={time}
              />
            );
          })}
        </div>
        <div className="admin-edit-button-container">{editButton}</div>
      </div>
    </div>
  );
};

export default EventsPage;
