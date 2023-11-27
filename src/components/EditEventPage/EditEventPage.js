import React, { useEffect, useState } from "react";
import "./EditEventPage.css";
import EventForm from "../EventForm/EventForm";

const AdminEventPage = () => {
  const eventId = window.location.href.split("/")[4];
  const [event, setEvent] = useState({});

  useEffect(() => {
    const getEvent = async () => {
      await fetch(
        process.env.REACT_APP_BASE_URL + `/api/v1/events/all/${eventId}`,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        }
      )
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          } else {
            throw response;
          }
        })
        .then((body) => {
          setEvent(body);
        })
        .catch((response) => {
          console.log(response);
        });
    };
    getEvent();
  }, [eventId]);

  return (
    <div className="admin-event-page-container">
      AdminEventPage {eventId}
      <EventForm eventData={event} setEvent={setEvent} />
    </div>
  );
};

export default AdminEventPage;
