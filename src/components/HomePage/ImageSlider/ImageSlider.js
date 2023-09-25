import React, { useCallback, useEffect, useRef, useState } from "react";
import "./ImageSlider.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef(null);

  const previousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      nextSlide();
    }, 10000);

    //to not have memory leaks
    return () => clearTimeout(timerRef.current);
  }, [nextSlide]);

  const slideStyle = {
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
  return (
    <div className="image-slidshow-container">
      <div style={slideStyle} className="slide">
        <div className="overlay">
          <div className="overlay-content-container">
            <h1>{slides[currentIndex].title}</h1>
            <p>{slides[currentIndex].description}</p>
            <div className="image-button">{slides[currentIndex].button}</div>
          </div>
        </div>
      </div>
      <div className="dots-container">
        <div className="left-arrow arrow" onClick={previousSlide}>
          ⇽
        </div>
        {slides.map((slide, index) => {
          return (
            <div
              className="slide-show-dot"
              key={index}
              onClick={() => setCurrentIndex(index)}
            >
              {currentIndex === index ? "⚫" : "◯"}
            </div>
          );
        })}
        <div className="right-arrow arrow" onClick={nextSlide}>
          ⇾
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
