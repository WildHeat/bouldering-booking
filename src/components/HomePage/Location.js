import React from "react";

const Location = () => {
  return (
    <div className="location-outer-container">
      <div className="location-inner-container">
        <h1>AB Bouldering Location</h1>
        <p>State-of-the-art Neverland climbing centres</p>
        <div className="location">
          <h2>Neverland</h2>
          <div className="location-images-container">
            <div className="location-image location-image1"></div>
            <div className="location-image location-image2"></div>
            <div className="location-image location-image3"></div>
          </div>
          <p>1 Nowhere street, Neverland NE35 1LK</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
