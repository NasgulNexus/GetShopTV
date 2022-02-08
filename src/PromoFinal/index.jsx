import React from "react";
import Slider from "../Slider";
import ButtonClose from "../ButtonClose";
import "../Promo/index.css";
import QRPromoInformation from "../QRPromoInformation";
import PromoFinalPanel from "./PromoFinalPanel";

const PromoFinal = () => {
  return (
    <div>
      <Slider />
      <div className="PromoButtonClose">
        <ButtonClose />
      </div>
      <div className="PromoQRInformation">
        <QRPromoInformation />
      </div>
      <div className="PromoPanel">
        <PromoFinalPanel />
      </div>
    </div>
  );
};

export default PromoFinal;
