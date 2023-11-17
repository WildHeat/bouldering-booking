import React, { useEffect } from "react";
import "./EventsPage.css";
import Event from "./Event";
import Data from "./EventsData.json";

const EventsPage = () => {
  const listOfEvent = Data["data"];

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
          console.log(body);
        })
        .catch((response) => {
          console.log(response);
        });
    };
    getAllEvents();
  }, []);

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
            return (
              <Event
                title={eve.title}
                description={eve.shortDescription}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
