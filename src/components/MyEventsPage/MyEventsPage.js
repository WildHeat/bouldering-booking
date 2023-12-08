import React, { useEffect, useState } from "react";
import "./MyEventsPage.css";

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
      {listOfEvents.map((event) => {
        return event.title;
      })}
    </div>
  );
};

export default MyEventsPage;
