import React, { useEffect, useState } from "react";
import "./MyEventsPage.css";
import Event from "../EventsPage/Event";

const MyEventsPage = () => {
  const [listOfEvents, setListOfEvents] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("loggedin") === "false") {
      return;
    }

    const getMyEvents = async () => {
      await fetch(
        process.env.REACT_APP_BASE_URL + "/api/v1/events/get-my-events",
        {
          method: "GET",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          throw response;
        })
        .then((body) => {
          setListOfEvents(body);
        })
        .catch((reponse) => {
          console.log(reponse);
        });
    };
    getMyEvents();
  }, []);

  return (
    <div className="my-events-page-container">
      <h1>My Events</h1>
      {listOfEvents.map((eve, index) => {
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
  );
};

export default MyEventsPage;
