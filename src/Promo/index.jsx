import React, { useEffect, useState } from "react";
import "./index.css";
import ButtonClose from "../ButtonClose";
import Panel from "../Panel";
import QRPromoInformation from "../QRPromoInformation";

const Promo = () => {
  const [keyButton, setKeyButton] = useState([]);

  useEffect(() => {
    const keyDown = event => {
      if (event.key === "Tab") {
        event.preventDefault();
      }
      setKeyButton(prev => [...prev, event.key]);
    };
    document.addEventListener("keydown", keyDown);
    return () => {
      document.removeEventListener("keydown", keyDown);
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
