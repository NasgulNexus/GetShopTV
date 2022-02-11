import React, { useEffect, useState } from "react";
import "./index.css";
import ButtonClose from "../ButtonClose";
import Panel from "../Panel";
import QRPromoInformation from "../QRPromoInformation";

const Promo = () => {
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
      <div className="PromoButtonClose">
        <ButtonClose />
      </div>
      <div className="PromoPanel">
        <Panel keyButton={keyButton} />
      </div>
      <div className="PromoQRInformation">
        <QRPromoInformation />
      </div>
      <img alt="image" className="PromoImage" />
    </div>
  );
};

export default Promo;
