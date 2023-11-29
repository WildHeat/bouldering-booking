import React from "react";

const EventForm = ({ event, setEvent }) => {
  // const handleUpdateField = (e) => {
  //   let temp = event;
  //   temp[e.target.id] = e.target.value;
  //   setEvent(temp);
  //   console.log(event);
  // };

  const handleUpdateField = (e) => {
    const { id, value } = e.target;
    const updatedEvent = { ...event, [id]: value };
    setEvent(updatedEvent);
  };

  return (
    <div className="event-form-container">
      <label htmlFor="id">ID: </label>
      <input type="text" id="id" value={event.id} disabled />
      <br />

      <label htmlFor="title">Title: </label>
      <input
        type="text"
        id="title"
        value={event.title}
        onChange={(e) => {
          handleUpdateField(e);
        }}
      />
      <br />

      <label htmlFor="description">Description: </label>
      <input type="text" id="description" value={event.description} />
      <br />

      <label htmlFor="smallDescription">Small description: </label>
      <input type="text" id="smallDescription" value={event.smallDescription} />
      <br />

      <label htmlFor="price">Price: </label>
      <input type="number" id="price" value={event.price} />
      <br />

      <label htmlFor="maxSize">Max size: </label>
      <input type="number" id="maxSize" value={event.maxSize} />
      <br />

      <label htmlFor="date">Date: </label>
      <input type="date" id="date" value={event.date} />
      <br />

      <label htmlFor="organiser">Organiser: </label>
      <input type="text" id="organiser" value={event.organiser} disabled />
      <br />
    </div>
  );
};

export default EventForm;
