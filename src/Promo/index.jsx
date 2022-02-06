import React from "react";
import "./index.css";
import Slider from "../Slider";
import ButtonClose from "../ButtonClose";
import Panel from "../Panel";
import QRPromoInformation from "../QRPromoInformation";

const Promo = () => {
  return (
    <div>
      <ButtonClose />
      <Panel />
      <QRPromoInformation />
    </div>
  );
};

export default Promo;
