import React from "react";
import "./EventsPage.css";

const EventsPage = () => {
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
      </div>
    </div>
  );
};

export default EventsPage;
