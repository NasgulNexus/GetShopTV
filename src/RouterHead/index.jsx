import React from "react";
import { Routes, Route } from "react-router-dom";
import Banner from "../Banner";
import Slider from "../Slider";

const RouterHead = () => (
  <div>
    <Routes>
      <Route path="/" element={<Banner />}></Route>
      <Route path="/promo" element={<Slider />}></Route>
    </Routes>
  </div>
);

export default RouterHead;
