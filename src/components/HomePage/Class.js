import React from "react";
import { useNavigate } from "react-router-dom";

const Class = ({ title, subTitle, url, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="class"
      style={{ backgroundImage: `url(${url})` }}
      onClick={() => {
        navigate(`/events/${id}`);
      }}
    >
      <div className="class-content-container">
        <h3>{title}</h3>
        <h6>{subTitle}</h6>
      </div>
    </div>
  );
};

export default Class;
