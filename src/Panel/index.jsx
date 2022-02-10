import React, { useState, useEffect } from "react";
import "./index.css";
import ButtonNumber from "../ButtonNumber";
import { Link } from "react-router-dom";
import PanelContainer from "./PanelContainer";

const buttonValue = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ["стереть", 0]
];

const Panel = ({ keyButton }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkbox, setChecbox] = useState(false);
  const [response, setResponse] = useState("");
  const [valid, setValid] = useState(true);

  /*useEffect(()=>{
    const access_key =  b1462b38258555ce649108e432aaede6;
    const phone = phoneNumber;
    if(phoneNumber.length===10){
      fetch( 'http://apilayer.net/api/validate?access_key=' + access_key + '&number=' + phone_number).then(res => res.json()).then(
        (result) => {
         setResponse(response);
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
  )*/

  useEffect(() => {
    const newKeyButton = keyButton[keyButton.length - 1];

    if (!isNaN(Number(newKeyButton)) && phoneNumber.length < 11) {
      setPhoneNumber(phoneNumber + newKeyButton);
    }
    if (newKeyButton === "Backspace") {
      setPhoneNumber(function() {
        return phoneNumber.slice(0, -1);
      });
    }
  }, [keyButton]);

  const handlerNumber = e => {
    const value = e.target.innerHTML;
    if (phoneNumber.length < 10) {
      setPhoneNumber(phoneNumber + value);
    }
  };

  const handlerDelete = () => {
    setPhoneNumber(function() {
      return phoneNumber.slice(0, -1);
    });
  };

  const HandlerToggle = () => {
    setChecbox(!checkbox);
  };

  return (
    <PanelContainer>
      <p className="PanelMainText">
        Введите ваш номер мобильного&nbsp;телефона
      </p>
      <p className={valid ? "PanelInput" : "ErrorColor PanelInput"}>{`+7(${
        phoneNumber[0] ? phoneNumber[0] : "_"
      }${phoneNumber[1] ? phoneNumber[1] : "_"}${
        phoneNumber[2] ? phoneNumber[2] : "_"
      })${phoneNumber[3] ? phoneNumber[3] : "_"}${
        phoneNumber[4] ? phoneNumber[4] : "_"
      }${phoneNumber[5] ? phoneNumber[5] : "_"}-${
        phoneNumber[6] ? phoneNumber[6] : "_"
      }${phoneNumber[7] ? phoneNumber[7] : "_"}-${
        phoneNumber[8] ? phoneNumber[8] : "_"
      }${phoneNumber[9] ? phoneNumber[9] : "_"}`}</p>
      <p className="PanelInputText">
        и с Вами свяжется наш менеждер для дальнейшей&nbsp;консультации
      </p>
      <div className="PanelDiv">
        <div className="PanelButtonBox">
          {buttonValue.flat().map(btn => {
            return (
              <ButtonNumber
                key={btn}
                className={
                  btn === "стереть"
                    ? "ButtonNumber ButtonDelete"
                    : "ButtonNumber"
                }
                value={btn}
                onClick={btn === "стереть" ? handlerDelete : handlerNumber}
              />
            );
          })}
        </div>
      </div>
      <div className="PanelCheckboxDiv">
        {valid ? (
          <>
            <input
              type="checkbox"
              className="PanelCheckbox"
              onChange={HandlerToggle}
            />
            <label className="PanelLabel">
              Согласие на обработку персональных&nbsp;данных
            </label>
          </>
        ) : (
          <p className="ErrorMessage">Неверно введён номер</p>
        )}
      </div>
      <Link to="/promofinal">
        <button disabled={!checkbox && valid} className="PanelButton">
          Подтвердить номер
        </button>
      </Link>
    </PanelContainer>
  );
};

export default Panel;
