import React from "react";
import { Routes, Route } from "react-router-dom";
import PromoMain from "../PromoMain";
import Promo from "../Promo";

const RouterHead = () => (
  <div>
    <Routes>
      <Route path="/" element={<PromoMain />}></Route>
      <Route path="/promo" element={<Promo />}></Route>
    </Routes>
  </div>
);

export default RouterHead;
