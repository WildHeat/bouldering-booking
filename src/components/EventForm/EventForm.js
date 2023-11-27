import React, { useState } from "react";

const EventForm = ({ eventData, setEvent }) => {
  //   const [id, setId] = useState(event.id);
  //   const [title, setTitle] = useState(event.title);
  //   const [smallDescription, setSmallDescription] = useState(
  //     event.smallDescription
  //   );
  //   const [description, setDescription] = useState(event.description);
  //   const [price, setPrice] = useState(event.price);
  //   const [maxSize, setMaxSize] = useState(event.maxSize);
  //   const [date, setDate] = useState(event.date);
  //   const [organiser, setOrganiser] = useState(event.organiser);
  //   const [spacesLeft, setSpacesLeft] = useState(event.spacesLeft);
  //   const [imageUrl, setImageUrl] = useState(event.imageUrl);

  //   const [event, setEvent] = useState(eventData);
  const handleUpdateField = (e) => {
    let temp = eventData;
    temp[e.target.id] = e.target.value;
    setEvent(temp);
    console.log(eventData);
  };

  return (
    <div className="event-form-container">
      <label htmlFor="id">ID: </label>
      <input type="text" id="id" value={eventData.id} disabled />
      <br />

      <label htmlFor="title">Title: </label>
      <input
        type="text"
        id="title"
        value={eventData.title}
        onChange={(e) => {
          handleUpdateField(e);
        }}
      />
      <br />

      <label htmlFor="description">Description: </label>
      <input type="text" id="description" value={eventData.description} />
      <br />

      <label htmlFor="smallDescription">Small description: </label>
      <input
        type="text"
        id="smallDescription"
        value={eventData.smallDescription}
      />
      <br />

      <label htmlFor="price">Price: </label>
      <input type="number" id="price" value={eventData.price} />
      <br />

      <label htmlFor="maxSize">Max size: </label>
      <input type="number" id="maxSize" value={eventData.maxSize} />
      <br />

      <label htmlFor="date">Date: </label>
      <input type="date" id="date" value={eventData.date} />
      <br />

      <label htmlFor="organiser">Organiser: </label>
      <input type="text" id="organiser" value={eventData.organiser} disabled />
      <br />
    </div>
  );
};

export default EventForm;
