import React, { useState, useRef } from "react";
import "./index.css";

const Slider = () => {
  const slider = useRef(null);
  const [items, setItems] = useState([1, 2, 3]);
  let position = 0;
  const handlerPrev = () => {
    if (position < 0) {
      position += 1280;
      slider.current.childNodes.forEach(element => {
        element.style = `transform: translateX(${position}px)`;
      });
    }
  };
  const handlerNext = () => {
    if (position >= -1280) {
      position -= 1280;
      slider.current.childNodes.forEach(element => {
        element.style = `transform: translateX(${position}px)`;
      });
    }
  };
  return (
    <div className="Slider">
      <div className="SliderTrack" ref={slider}>
        <img className="SliderItem item-1" />
        <img className="SliderItem item-2" />
        <img className="SliderItem item-3" />
      </div>
      <button className="SliderButton SliderButtonPrev" onClick={handlerPrev}>
        {`<`}{" "}
      </button>
      <button className="SliderButton SliderButtonNext" onClick={handlerNext}>
        {`>`}{" "}
      </button>
    </div>
  );
};

export default Slider;
