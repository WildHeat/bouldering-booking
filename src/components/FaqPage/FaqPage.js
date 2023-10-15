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
        <h1>Here are some frequently asked questions</h1>
        <div className="faq-question container">
          <div className="question">
            <h3>Is there any parking available?</h3>
            <p className="answer">
              Yes! We have a car park which is free for 3 hours.
            </p>
          </div>
          <div className="question">
            <h3>Can I pause or terminate my membership?</h3>
            <p className="answer">
              Your ability to put your membership on hold or cancel it depends
              on the type of monthly subscription you have. Depending on your
              plan, you can either pause or terminate your membership after one
              or three fully paid months. Prepaid members can pause their
              memberships for at least one month.
            </p>
          </div>
          <div className="question">
            <h3>Can I hire shoes? Or must I buy them?</h3>
            <p className="answer">
              While you can buy you very own shoes from our shop! We also have
              shoes to hire for a a wide range of sizes.
            </p>
          </div>
          <div className="question">
            <h3>Do I need to pre-book a session?</h3>
            <p className="answer">
              No pre-booking is required. Visit us anytime and have fun!
            </p>
          </div>
          <div className="question">
            <h3>Do you need experience to come bouldering?</h3>
            <p className="answer">
              Experience is not necessary. All that's required is
              pre-registering here, which involves watching our safety video and
              completing a waiver. If you're not confident about your first-time
              climbing experience, you also have the option to book our
              Introduction to Bouldering Course, during which our staff will
              guide you through everything you need to know!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
