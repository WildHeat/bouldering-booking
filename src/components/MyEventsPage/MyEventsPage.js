import React, { useEffect, useState } from "react";
import "./MyEventsPage.css";
import Event from "../EventsPage/Event";

const MyEventsPage = () => {
  // const [listOfEvents, setListOfEvents] = useState([]);
  const [listOfEventsPast, setListOfEventsPast] = useState([]);
  const [listOfEventsFuture, setListOfEventsFuture] = useState([]);

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
          sortEvents(body);
        })
        .catch((reponse) => {
          console.log(reponse);
        });
    };
    getMyEvents();
  }, []);

  const sortEvents = (events) => {
    let past = [];
    let future = [];
    events.forEach((event) => {
      if (new Date(event.date) < Date.now()) {
        past.push(event);
      } else {
        future.push(event);
      }
    });
    past.sort((event1, event2) => {
      return new Date(event1.date) - new Date(event2.date);
    });

    future.sort((event1, event2) => {
      return new Date(event1.date) - new Date(event2.date);
    });

    setListOfEventsPast(past);
    setListOfEventsFuture(future);
  };

  return (
    <div className="my-events-page-container">
      <h1>My Events</h1>
      <h3 className="my-events-sub-title">
        These are the events you have signed up for!
      </h3>
      <br />
      <h3 className="my-events-coming-up-title">Comming up!</h3>
      <div className="my-events-events-container">
        {listOfEventsFuture.map((eve, index) => {
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
      <h3 className="my-events-coming-up-title">Past events</h3>
      <div className="my-events-events-container">
        {listOfEventsPast.map((eve, index) => {
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
    </div>
  );
};

export default MyEventsPage;
