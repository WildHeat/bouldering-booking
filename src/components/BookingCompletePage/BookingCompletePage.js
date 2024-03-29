import React from "react";
import "./BookingCompletePage.css";

const BookingCompletePage = () => {
  return (
    <div className="booking-complete-page-container">
      <div className="booking-complete-content-container">
        <h1>Booking Completed!</h1>
        <p>
          Thank you for booking with us. We will send you a confirmation email
          very shortly!
        </p>
      </div>
      <div className="image-container booking-complete-image">
        <div className="overlay">
          <div className="overlay-content-container"></div>
        </div>
      </div>
    </div>
  );
};

export default BookingCompletePage;
