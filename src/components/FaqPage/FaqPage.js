import React from "react";
import "./FaqPage.css";

const FaqPage = () => {
  return (
    <div className="faq-page-container">
      <div className="image-container faq-image">
        <div className="overlay">
          <div className="overlay-content-container">
            <h1>FAQ</h1>
          </div>
        </div>
      </div>
      <div className="faq-content-container">
        <h1>Here are some questions</h1>
        <div className="faq-question container">
          <div className="question">
            <h3>Some Questions about stuff?</h3>
            <p className="answer">Some answer to the question at hand</p>
          </div>
          <div className="question">
            <h3>Some Questions about stuff?</h3>
            <p className="answer">Some answer to the question at hand</p>
          </div>
          <div className="question">
            <h3>Some Questions about stuff?</h3>
            <p className="answer">Some answer to the question at hand</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
