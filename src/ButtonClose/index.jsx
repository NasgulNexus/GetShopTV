import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const ButtonClose = () => {
  return (
    <Link to="/">
      <button className="buttonClose">
        <span className="buttonCloseIcon" />
      </button>
    </Link>
  );
};

export default ButtonClose;
