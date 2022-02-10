import React, { useEffect, useState } from "react";
import "./index.css";
import ButtonClose from "../ButtonClose";
import Panel from "../Panel";
import QRPromoInformation from "../QRPromoInformation";

const Promo = () => {
  const [key, setKey] = useState("");

  useEffect(() => {
    const keyUp = event => {
      console.log(
        "Клавиша " + event.key + " отпущена. Её код - " + event.keyCode
      );
      setKey(event.key);
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
        <Panel />
      </div>
      <div className="PromoQRInformation">
        <QRPromoInformation />
      </div>
      <img className="PromoImage" />
    </div>
  );
};

export default Promo;
