import React from "react";
import "./index.css";
import ButtonNumber from "../ButtonNumber";

const buttonValue = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ["стереть", 0]
];

const Panel = () => {
  return (
    <div className="PanelContainer">
      <p className="PanelMainText">
        Введите ваш номер мобильного&nbsp;телефона
      </p>
      <input className="PanelInput" />
      <p className="PanelInputText">
        и с Вами свяжется наш менеждер для дальнейшей&nbsp;консультации
      </p>
      <div className="PanelDiv">
        <div className="PanelButtonBox">
          {buttonValue.flat().map((btn, i) => {
            return (
              <ButtonNumber
                key={i}
                className={
                  btn === "стереть"
                    ? "ButtonNumber ButtonDelete"
                    : "ButtonNumber"
                }
                value={btn}
                onClick={() => {
                  console.log(`${btn} clicked!`);
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="PanelCheckboxDiv">
        <input type="checkbox" className="PanelCheckbox" />
        <label className="PanelLabel">
          Согласие на обработку персональных&nbsp;данных
        </label>
      </div>
      <button disabled={true} className="PanelButton">Подтвердить номер</button>
    </div>
  );
};

export default Panel;
