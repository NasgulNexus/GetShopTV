import React, { useRef, useEffect } from "react";
import "./index.css";

const Input = ({ classCheck, checkboxRef, onChange }) => {
  const checkboxItemRef = useRef(null);

  useEffect(() => {
    if ("checkbox" === checkboxRef) {
      checkboxItemRef.current.focus();
    }
  }, [checkboxRef]);

  return (
    <label className={classCheck}>
      <input ref={checkboxItemRef} type="checkbox" onChange={onChange} />
      <span className="CheckboxCustom"></span>
      <p className="Label">Согласие на обработку персональных&nbsp;данных</p>
    </label>
  );
};

export default Input;
