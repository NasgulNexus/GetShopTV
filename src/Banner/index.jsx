import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Banner = () => {
  return (
    <div className="bannerDiv">
      <p className="bannerHeadText">
        ИСПОЛНИТЕ&nbsp;МЕЧТУ&nbsp;ВАШЕГО МАЛЫША! ПОДАРИТЕ&nbsp;ЕМУ&nbsp;СОБАКУ!
      </p>
      <div className="bannerImage">
        <svg className="QRBanner" />
      </div>
      <p className="bannerText">Сканируйте QR-код или нажмите ОК</p>
      <Link to="/promo">
        <button className="bannerButton">ОК</button>
      </Link>
    </div>
  );
};

export default Banner;
