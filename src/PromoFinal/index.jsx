import React, { useEffect, useState } from "react";
import Slider from "../Slider";
import ButtonClose from "../ButtonClose";
import "../Promo/index.css";
import QRPromoInformation from "../QRPromoInformation";
import PromoFinalPanel from "./PromoFinalPanel";

const PromoFinal = () => {
  const [keyButton, setKeyButton] = useState([]);
  useEffect(() => {
    const keyUp = event => {
      setKeyButton(prev => [...prev, event.key]);
    };
    document.addEventListener("keyup", keyUp);

    return () => {
      document.removeEventListener("keyup", keyUp);
    };
  }, []);
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
