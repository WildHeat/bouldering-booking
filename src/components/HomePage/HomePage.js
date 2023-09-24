import React from "react";
import ImageSlider from "./ImageSlider/ImageSlider";

const HomePage = () => {
  const slides = [
    {
      title: "Create your unique character and start your journey today",
      url: require("../../img/slide1.jpg"),
    },
    {
      title: "You decide what skills your character should have",
      url: require("../../img/slide2.jpg"),
    },
    {
      title: "In-depth dashboard to give you a deeper insight in your skills",
      url: require("../../img/slide3.jpg"),
    },
  ];

  return (
    <div>
      <ImageSlider slides={slides} />
    </div>
  );
};

export default HomePage;
