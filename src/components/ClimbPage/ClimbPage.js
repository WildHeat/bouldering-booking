import React, { useEffect } from "react";
import "./ClimbPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ClimbPage = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = (event) => {
      let pageHeight = document.getElementsByClassName(
        "climb-page-container"
      )[0].clientHeight;
      setScrollTop(window.scrollY / pageHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div className="climb-page-container">
        <div className="climb-background"></div>
        <div className="climb-register">
          <div
            className="start-now-container"
            onClick={() => navigate("/register")}
          >
            <h3>Start Now!</h3>
          </div>
        </div>
        <div
          className="climb-inner-background"
          style={{ top: scrollTop * 115 + "%" }}
        ></div>
        <div className="climb-content-container">
          <div className="climb-info-card">
            <div className="climb-info-card-text-container">
              <h3>Need Gear?</h3>
              <p className="climb-info-card-text">
                If you're falling head over heels for climbing and aiming to
                rock some stylish gear of your own, make sure to swing by our
                Retail Shops in Neverland. Our crew is all set to hook you up
                with the coolest climbing duds!
              </p>
            </div>
          </div>
          <div className="climb-info-card climb-image climb4"></div>
          <div className="climb-info-card climb-image climb3"></div>

          <div className="climb-info-card">
            <div className="climb-info-card-text-container">
              <h3>Private Coaching!</h3>
              <p className="climb-info-card-text">
                Private coaching is available to climbers of all levels,
                offering personalized guidance. Whether you're a pro or just
                starting out, this one-on-one support is your fast track to
                improvement.
              </p>
            </div>
          </div>
          <div className="climb-info-card">
            <div className="climb-info-card-text-container">
              <h3>Intro To Bouldering!</h3>
              <p className="climb-info-card-text">
                Whether you're a climbing connoisseur or haven't yet tiptoed
                onto the vertical turf, our 1-hour "Intro to Bouldering" is your
                ticket to adventure, guided by our awesome coaches!
              </p>
            </div>
          </div>
          <div className="climb-info-card climb-image climb1"></div>
          <div className="climb-info-card climb-image climb2"></div>

          <div className="climb-info-card">
            <div className="climb-info-card-text-container">
              <h3>START NOW!</h3>
              <p className="climb-info-card-text">
                Hey there, adventure seekers! It's time to kick things off in
                style. Fill out our online pre-registration, then join us for a
                climb. No bookings needed – just show up and scale those
                heights!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="climb-bottom-container">
        <div className="climb-bottom-content">
          <h2>Start Climbing!</h2>
          <p>
            Welcome to AB Bouldering! We're passionate about climbing and
            helping others become climbers.
          </p>
          <p>
            Climbing is an accessible sport, and with the right support, you can
            quickly improve and enjoy it for life.
          </p>
          <p>
            We've created a clear pathway to help new and improving climbers
            reach their goals and see rapid progress in their climbing
            abilities.
          </p>
          <h3 className="climb-up-message">
            ^ Scroll up to start your first climb! ^
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ClimbPage;
