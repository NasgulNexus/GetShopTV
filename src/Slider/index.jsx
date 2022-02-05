import React from "react";
import Carousel from "./Сarousel";
import "./index.css";

const Slider = () => {
  return (
    <Carousel>
      <div className="item item-1">
        <img src="../images/sliderFistPicture.svg" />
      </div>
      <div className="item item-2">
        <img src="../images/sliderSecondPicture.svg" />
      </div>
      <div className="item item-3">
        <img src="../images/sliderThirdPicture.svg" />
      </div>
    </Carousel>
  );
};

export default Slider;
