import React from "react";
import "./index.css";

const Banner = () => {
  return (
    <div className="bannerDiv">
      <p className="bannerHeadText">
        ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!
      </p>
      <img className="bannerImage"></img>
      <p className="bannerText">Сканируйте QR-код или нажмите ОК</p>
      <button className="bannerButton">ОК</button>
    </div>
  );
};

export default Banner;
