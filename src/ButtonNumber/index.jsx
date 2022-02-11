import React, { useRef, useEffect } from "react";
import "./index.css";

const ButtonNumber = ({ className, value, onClick, buttonRef }) => {
  const buttonItemRef = useRef(null);
  useEffect(() => {
    if (value.toString() === buttonRef) {
      buttonItemRef.current.focus();
    }
  }, [buttonRef]);

  return (
    <button className={className} onClick={onClick} ref={buttonItemRef}>
      {value}
    </button>
  );
};
export default ButtonNumber;
