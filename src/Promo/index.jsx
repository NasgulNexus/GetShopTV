import React from "react";
import "./index.css";
import Slider from "../Slider";
import ButtonClose from "../ButtonClose";
import Panel from "../Panel";
import QRPromoInformation from "../QRPromoInformation";

const Promo = () => {
  return (
    <div>
      <div className="PromoButtonClose">
        <ButtonClose />
      </div>
      <div className="PromoPanel">
        <Panel />
      </div>
      <div className="PromoQRInformation">
        <QRPromoInformation />
      </div>
    </div>
  );
};

export default Promo;
