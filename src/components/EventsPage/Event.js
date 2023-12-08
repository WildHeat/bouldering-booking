import React from "react";
import { useNavigate } from "react-router-dom";

const Event = ({ eventId, title, description, index, url }) => {
  let navigate = useNavigate();

  return (
    <div
      className="event"
      style={{
        "background-image": `url('${url}')`,
      }}
      key={index}
      onClick={() => {
        navigate(`/events/${eventId}`);
      }}
    >
      <div className="event-text-container">
        <h4 className="event-title">{title}</h4>
        <p className="event-short-description">{description}</p>
      </div>
      <div className="event-date-time-container">
        <p className="event-date">00/00/00</p>
        <p className="event-date">00:00</p>
      </div>
    </div>
  );
};

export default Event;
