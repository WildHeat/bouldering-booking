import React, { useEffect } from "react";
import "./ClimbPage.css";
import { useState } from "react";

const ClimbPage = () => {
  const [scrollTop, setScrollTop] = useState(0);

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
    <div className="climb-page-container">
      <div className="climb-background"></div>
      <div
        className="climb-inner-background"
        style={{ top: scrollTop * 125 + "%" }}
      ></div>
      <div className="climb-content-container">
        <div className="climb-info-card">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="climb-info-card">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="climb-info-card">
          <p>
            If you're falling head over heels for climbing and aiming to rock
            some stylish gear of your own, make sure to swing by our Retail
            Shops in Neverland. Our crew is all set to hook you up with the
            coolest climbing duds!
          </p>
        </div>
        <div className="climb-info-card">
          <p>
            Private coaching is up for grabs for climbers of all stripes, no
            matter if you're scaling pro or starting from scratch. Because let's
            face it, sometimes we all learn better with a coach who's got our
            back in a one-on-one showdown! It's your express lane to
            turbocharged progress whenever you want it.
          </p>
        </div>
        <div className="climb-info-card">
          <p>
            Whether you're a climbing connoisseur or haven't yet tiptoed onto
            the vertical turf, our 1-hour "Intro to Bouldering" is your ticket
            to adventure, guided by our awesome coaches!
          </p>
        </div>
        <div className="climb-info-card">
          <p>
            Hey there, adventure seekers! It's time to kick things off in style.
            Fill out our online pre-registration, then join us for a climb. No
            bookings needed – just show up and scale those heights!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClimbPage;
