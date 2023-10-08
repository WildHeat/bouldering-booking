import React from "react";
import "./EventsPage.css";
import Event from "./Event";
const EventsPage = () => {
  const listOfEvent = [
    {
      title: "Kids Events",
      shortDescription: "Free entry for under 16s",
      content:
        "Some information about something to do witht hte event. I dont know what to put here so yeah...i should just use Lorum ipsum but i guess its too late now :P",
    },
    {
      title: "Beginner Events",
      shortDescription: "1hr session",
      content:
        "Some information about something to do witht hte event. I dont know what to put here so yeah...i should just use Lorum ipsum but i guess its too late now :P",
    },
    {
      title: "Free Coaching",
      shortDescription: "1hr session",
      content:
        "Some information about something to do witht hte event. I dont know what to put here so yeah...i should just use Lorum ipsum but i guess its too late now :P",
    },
    {
      title: "Bouldering Foundations",
      shortDescription: "3 week course",
      content:
        "Some information about something to do witht hte event. I dont know what to put here so yeah...i should just use Lorum ipsum but i guess its too late now :P",
    },
    {
      title: "October Fun",
      shortDescription: "Free session for beginners",
      content:
        "Some information about something to do witht hte event. I dont know what to put here so yeah...i should just use Lorum ipsum but i guess its too late now :P",
    },
    {
      title: "AB Bouldering Birthday!",
      shortDescription: "Full day party",
      content:
        "Some information about something to do witht hte event. I dont know what to put here so yeah...i should just use Lorum ipsum but i guess its too late now :P",
    },
    {
      title: "Student Social",
      shortDescription: "2hr session",
      content:
        "Some information about something to do witht hte event. I dont know what to put here so yeah...i should just use Lorum ipsum but i guess its too late now :P",
    },
    {
      title: "Private Coaching",
      shortDescription: "1hr session",
      content:
        "Some information about something to do witht hte event. I dont know what to put here so yeah...i should just use Lorum ipsum but i guess its too late now :P",
    },
    {
      title: "Social night",
      shortDescription: "1.5hr session",
      content:
        "Some information about something to do witht hte event. I dont know what to put here so yeah...i should just use Lorum ipsum but i guess its too late now :P",
    },
  ];

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
