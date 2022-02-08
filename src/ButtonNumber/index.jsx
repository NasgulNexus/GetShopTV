import React from "react";
import "./index.css";

const ButtonNumber = ({ className, value, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};
export default ButtonNumber;
