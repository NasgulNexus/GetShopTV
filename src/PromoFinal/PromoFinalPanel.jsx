import React from "react";
import "./PromoFinalPanel.css";
import PanelContainer from "../Panel/PanelContainer";

const PromoFinalPanel = () => {
  return (
    <PanelContainer>
      <p className="PromoFinalMainText">ЗАЯВКА ПРИНЯТА</p>
      <p className="PromoFinalText">
        Держите телефон под рукой. Скоро&nbsp;с&nbsp;Вами&nbsp;свяжется наш
        менеджер.
      </p>
    </PanelContainer>
  );
};

export default PromoFinalPanel;
