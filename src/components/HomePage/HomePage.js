import React from "react";
import ImageSlider from "./ImageSlider/ImageSlider";
import "./HomePage.css";

const HomePage = () => {
  const slides = [
    {
      title: "Conquer The Wall Today!",
      description:
        "Join the conquest to overcome any wall that is placed in front of you :)",
      button: "Join Today!",
      url: require("../../img/slide1.jpg"),
    },
    {
      title: "Group Begginer Classes",
      description:
        "Meet new people and learn/share skills. No skill required. Fun is the focus!",
      button: "Classes",
      url: require("../../img/slide3.jpg"),
    },
    {
      title: "Kids Parties",
      description: "Have organised party for your children and their friends!",
      button: "Party",
      url: require("../../img/slide2.jpg"),
    },
  ];

  return (
    <div>
      <ImageSlider slides={slides} />
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
    </div>
  );
};

export default HomePage;
