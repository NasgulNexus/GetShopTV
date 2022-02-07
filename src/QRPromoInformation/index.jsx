import React from "react";
import "./index.css";

const QRPromoInformation = () => {
  return (
    <div className="QRPromoInformationContainer">
      <p className="QRPromoInformationText">
        Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
      </p>
      <div className="QRPromoInformationImage">
        <svg className="QR" />
      </div>
    </div>
  );
};

export default QRPromoInformation;
