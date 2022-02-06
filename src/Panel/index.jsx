import React from "react";
import "./index.css";

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
      <div className="PanelDiv"></div>
      <div>
        <input type="checkbox" className="PanelCheckbox" />
        <label className="PanelLabel">
          Согласие на обработку персональных данных
        </label>
      </div>
      <button className="PanelButton">Подтвердить номер</button>
    </div>
  );
};

export default Panel;
