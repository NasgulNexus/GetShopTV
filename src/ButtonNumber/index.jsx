import React, { useRef, useEffect } from "react";
import "./index.css";

const ButtonNumber = ({ className, value, onClick, buttonRef }) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};
export default ButtonNumber;
