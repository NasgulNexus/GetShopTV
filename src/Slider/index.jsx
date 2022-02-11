import React, { useState, useRef, useEffect } from "react";
import "./index.css";

const POSITION_WIDTH = 1280;

const Slider = ({ keyButton }) => {
  const slider = useRef(null);
  const [countPosition, setCountPosition] = useState(0);

  const handlerPrev = () => {
    setCountPosition(prev => {
      return prev - 1;
    });
    slider.current.childNodes.forEach(element => {
      element.style = `transform: translateX(${-(countPosition - 1) *
        POSITION_WIDTH}px)`;
    });
  };

  const handlerNext = () => {
    setCountPosition(prev => {
      return prev + 1;
    });
    slider.current.childNodes.forEach(element => {
      element.style = `transform: translateX(${-(countPosition + 1) *
        POSITION_WIDTH}px)`;
    });
  };

  useEffect(() => {
    const newKeyButton = keyButton[keyButton.length - 1];
    if (newKeyButton === "ArrowLeft" && countPosition > 0) {
      handlerPrev();
    }
    if (newKeyButton === "ArrowRight" && countPosition < 2) {
      handlerNext();
    }
  }, [keyButton]);

  return (
    <div className="Slider">
      <div className="SliderTrack" ref={slider}>
        <div className="SliderItem item-1" />
        <div className="SliderItem item-2" />
        <div className="SliderItem item-3" />
      </div>
      <div className="SliderButtonDiv SliderButtonPrev">
        <button
          disabled={countPosition === 0}
          className="SliderButton SliderButtonPrev"
          onClick={handlerPrev}
        >
          <span className="SliderButtonIconLeft"></span>
        </button>
      </div>
      <div className="SliderButtonDiv SliderButtonNext">
        <button
          disabled={countPosition === 2}
          className="SliderButton"
          onClick={handlerNext}
        >
          <span className="SliderButtonIconRight"></span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
