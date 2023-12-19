import React from "react";
import ImageSlider from "./ImageSlider/ImageSlider";
import "./HomePage.css";
import BoulderingClasses from "./BoulderingClasses";
import NewClimber from "./NewClimber";
import Location from "./Location";

const HomePage = () => {
  const slides = [
    {
      title: "Conquer The Wall Today!",
      description:
        "Join the conquest to overcome any wall that is placed in front of you :)",
      button: "Join Today!",
      url: require("../../img/slide1.jpg"),
      link: "/register",
    },
    {
      title: "Group Classes",
      description:
        "Meet new people and learn/share skills. No skill required. Fun is the focus!",
      button: "Classes",
      url: require("../../img/slide3.jpg"),
      link: "/events",
    },
    {
      title: "Parties",
      description:
        "Have organised parties! Send a request to have organised parties in our facility.",
      button: "Send Request",
      url: require("../../img/slide2.jpg"),
      link: "/contact",
    },
  ];

  return (
    <div className="page-container">
      <ImageSlider slides={slides} />
      <BoulderingClasses />
      <Location />
      <NewClimber />
    </div>
  );
};

export default HomePage;
