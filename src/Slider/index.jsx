import React, { useState, useRef } from "react";
import "./index.css";

const POSITION_WIDTH = 1280;

const Slider = () => {
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

  return (
    <div className="Slider">
      <div className="SliderTrack" ref={slider}>
        <img className="SliderItem item-1" />
        <img className="SliderItem item-2" />
        <img className="SliderItem item-3" />
      </div>
      <button
        disabled={countPosition === 0}
        className="SliderButton SliderButtonPrev"
        onClick={handlerPrev}
      >
        {`<`}
      </button>
      <button
        disabled={countPosition === 2}
        className="SliderButton SliderButtonNext"
        onClick={handlerNext}
      >
        {`>`}
      </button>
    </div>
  );
};

export default Slider;
