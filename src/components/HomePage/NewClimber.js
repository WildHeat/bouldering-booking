import React from "react";
import { Link } from "react-router-dom";

const NewClimber = () => {
  return (
    <div className="new-climber-container">
      <div className="new-climber-inner-container">
        <div className="new-climber-content">
          <h2>New Climber?</h2>
          <p>
            Welcome to AB Bouldering, where bouldering adventure begins! If
            you're new to climbing or just looking for a fun and exciting way to
            stay active, you're in the right place.
            <br />
            <br />
            Our bouldering gym in Neverland is all about making climbing
            accessible and enjoyable for everyone, whether you've never climbed
            before or you're a pro. At AB Bouldering you'll find a friendly and
            welcoming atmosphere, easy-to-climb routes, and supportive staff to
            guide you along the way.
            <br />
            <br />
            So, come on in, chalk up your hands, strap on those climbing shoes,
            and let's start this amazing journey together!
          </p>
          <br />
          <Link to={"/climb"}>
            <div className="new-climber-button">Start your first climb!</div>
          </Link>
        </div>
        <div className="new-climber-image"></div>
      </div>
    </div>
  );
};

export default NewClimber;
