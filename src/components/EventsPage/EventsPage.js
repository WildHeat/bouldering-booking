import React from "react";
import "./EventsPage.css";
import Event from "./Event";
import Data from "./EventsData.json";

const EventsPage = () => {
  const listOfEvent = Data["data"];

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
          {listOfEvent.map((eve) => {
            return (
              <Event title={eve.title} description={eve.shortDescription} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
