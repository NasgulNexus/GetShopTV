import React from "react";
import { Routes, Route } from "react-router-dom";
import PromoMain from "../PromoMain";
import Slider from "../Slider";

const RouterHead = () => (
  <div>
    <Routes>
      <Route path="/" element={<PromoMain />}></Route>
      <Route path="/promo" element={<Slider />}></Route>
    </Routes>
  </div>
);

export default RouterHead;
