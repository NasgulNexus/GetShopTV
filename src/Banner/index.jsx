import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import QR from "../QR";

const Banner = () => {
  return (
    <div className="bannerDiv">
      <p className="bannerHeadText">
        ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!
      </p>
      <div className="bannerImage">
        <QR />
      </div>
      <p className="bannerText">Сканируйте QR-код или нажмите ОК</p>
      <Link to="/promo">
        <button className="bannerButton">ОК</button>
      </Link>
    </div>
  );
};

export default Banner;
