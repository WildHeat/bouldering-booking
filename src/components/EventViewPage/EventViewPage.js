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
    <div className="event-view-content-container">
      <div className="head-line">
        <h1 className="event-title">{pageTitle}</h1>
        <h3>{event.smallDescription}</h3>
      </div>
      <div className="event-information-container">
        <div className="event-description-container">
          <p className="event-description">{event.description}</p>
          <br />
          <p className="event-description">
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <br />
          <p className="event-description">
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </div>

        <div className="event-information">
          <div className="info date">Date: {event.date}</div>
          <div className="info max-size">Max size: {event.maxSize}</div>
          <div className="info spaces-left">
            Spaces Left: {event.spacesLeft}
          </div>
          <div className="info organiser">Organiser: {event.organiser}</div>
        </div>
      </div>
    </div>
  );
};

export default EventViewPage;
