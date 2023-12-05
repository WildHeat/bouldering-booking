import React from "react";
import "./EventForm.css";

const EventForm = ({ event, setEvent, listOfAdminNames }) => {
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
      <input
        type="text"
        id="description"
        value={event.description}
        onChange={(e) => {
          handleUpdateField(e);
        }}
      />
      <br />

      <label htmlFor="smallDescription">Small description: </label>
      <input
        type="text"
        id="smallDescription"
        value={event.smallDescription}
        onChange={(e) => {
          handleUpdateField(e);
        }}
      />
      <br />

      <label htmlFor="imageUrl">Image url: </label>
      <input
        type="text"
        id="imageUrl"
        value={event.imageUrl}
        onChange={(e) => {
          handleUpdateField(e);
        }}
      />
      <br />

      <label htmlFor="price">Price: </label>
      <input
        type="number"
        id="price"
        value={event.price}
        onChange={(e) => {
          handleUpdateField(e);
        }}
      />
      <br />

      <label htmlFor="maxSize">Max size: </label>
      <input
        type="number"
        id="maxSize"
        value={event.maxSize}
        onChange={(e) => {
          handleUpdateField(e);
        }}
      />
      <br />

      <label htmlFor="date">Date: </label>
      <input
        type="datetime-local"
        id="date"
        value={event.date}
        onChange={(e) => {
          handleUpdateField(e);
        }}
      />
      <br />

      <label htmlFor="organiser">Organiser: </label>
      <select
        id="organiser"
        className="admin-names"
        value={event.organiser}
        onChange={(e) => {
          handleUpdateField(e);
        }}
      >
        {listOfAdminNames.map((name) => {
          return <option value={name}>{name}</option>;
        })}
      </select>
      {/* <input type="text" id="organiser" value={event.organiser} disabled /> */}
      <br />
    </div>
  );
};

export default EventForm;
