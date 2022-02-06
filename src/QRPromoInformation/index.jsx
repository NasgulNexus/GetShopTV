import React from "react";
import "./index.css";
import QR from "../QR";

const QRPromoInformation = () => {
  return (
    <div className="QRPromoInformationContainer">
      <p className="QRPromoInformationText">
        Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
      </p>
      <div className="QRPromoInformationImage">
        <QR />
      </div>
    </div>
  );
};

export default QRPromoInformation;
