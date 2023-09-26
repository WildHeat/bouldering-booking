import React from "react";

const BoulderingClasses = () => {
  return (
    <div className="bouldering-classes-section">
      <div className="bouldering-inner-container">
        <h1>Bouldering Classes</h1>
        <div className="classes-container">
          <div className="class class-kids">
            <div className="class-content-container">
              <h3>Kids Parties</h3>
              <h6>Fun parties for kids!</h6>
            </div>
          </div>
          <div className="class class-beginner">
            <div className="class-content-container">
              <h3>For Beginners</h3>
              <p>Sections for beginners!</p>
            </div>
          </div>
          <div className="class class-friends">
            <div className="class-content-container">
              <h3>Group Classes</h3>
              <p>Classes with your friends!</p>
            </div>
          </div>
          <div className="class class-private">
            <div className="class-content-container">
              <h3>Private Classes</h3>
              <p>A private session with a coach!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoulderingClasses;
