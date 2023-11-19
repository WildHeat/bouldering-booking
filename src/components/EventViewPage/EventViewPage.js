import React, { useEffect, useState } from "react";
import "./EventViewPage.css";

const EventViewPage = () => {
  const eventId = window.location.href.split("/events/")[1];
  const [event, setEvent] = useState({});
  const [pageTitle, setPageTitle] = useState("Loading event...");

  useEffect(() => {
    const getEvent = async () => {
      await fetch(
        process.env.REACT_APP_BASE_URL + `/api/v1/events/all/${eventId}`
      )
        .then((response) => {
          if (response.status !== 200) {
            throw response;
          }
          return response.json();
        })
        .then((body) => {
          setPageTitle(body.title);
          setEvent(body);
        })
        .catch(() => {
          setPageTitle("Cannot find event");
        });
    };
    getEvent();
  }, [eventId]);

  return (
    <div>
      <div className="head-line">
        <h1 className="event-title">{pageTitle}</h1>
        <h3>{event.smallDescription}</h3>
      </div>
      <div className="event-information-container">
        <p>{event.description}</p>
        <div className="event-information">
          <div className="date">Date: {event.date}</div>
          <div className="max-size">Max size: {event.maxSize}</div>
          <div className="date">Spaces Left: {event.spacesLeft}</div>
          <div className="date">Organiser: {event.organiser}</div>
        </div>
      </div>
    </div>
  );
};

export default EventViewPage;
