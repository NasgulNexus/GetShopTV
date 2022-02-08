import React from "react";
import "./index.css";
import Slider from "../Slider";
import ButtonClose from "../ButtonClose";
import "../Promo/index.css";

const PromoFinal = () => {
  return (
    <div>
      <Slider />
      <div className="PromoButtonClose">
        <ButtonClose />
      </div>
    </div>
  );
};

export default PromoFinal;
