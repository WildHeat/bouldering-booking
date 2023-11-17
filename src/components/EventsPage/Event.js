import React from "react";

const Event = ({ title, description, index }) => {
  return (
    <div className="event" key={index}>
      <div className="event-text-container">
        <h4 className="event-title">{title}</h4>
        <p className="event-short-description">{description}</p>
      </div>
    </div>
  );
};

export default Event;
