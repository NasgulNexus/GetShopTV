import React, { useState, useEffect, useRef } from "react";
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

const keyboard = [
  [{ id: "1" }, { id: "2" }, { id: "3" }],
  [{ id: "4" }, { id: "5" }, { id: "6" }],
  [{ id: "7" }, { id: "8" }, { id: "9" }],
  [{ id: "стереть" }, { id: "0" }],
  [{ id: "checkbox" }],
  [{ id: "submit" }]
];

const Panel = ({ keyButton }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkbox, setChecbox] = useState(false);
  const [response, setResponse] = useState("");
  const [valid, setValid] = useState(true);

  const [currentRef, setCurrentRef] = useState({ i: 0, j: 0, id: "1" });
  const checkboxRef = useRef(null);
  const submitRef = useRef(null);

  const ArrowLeft = () => {
    if (currentRef.i < 3) {
      if (currentRef.j - 1 > -1) {
        setCurrentRef(prev => ({
          ...prev,
          j: prev.j - 1,
          id: keyboard[prev.i][prev.j - 1].id
        }));
      } else {
        if (currentRef.i !== 0) {
          setCurrentRef(prev => ({
            i: prev.i - 1,
            j: 2,
            id: keyboard[prev.i - 1][2].id
          }));
        }
      }
    }
    if (currentRef.i === 3) {
      if (currentRef.j - 1 > -1) {
        setCurrentRef(prev => ({
          ...prev,
          j: prev.j - 1,
          id: keyboard[prev.i][prev.j - 1].id
        }));
      } else {
        setCurrentRef(prev => ({
          i: prev.i - 1,
          j: 2,
          id: keyboard[prev.i - 1][2].id
        }));
      }
    }
    if (currentRef.i === 4) {
      setCurrentRef(prev => ({
        i: prev.i - 1,
        j: 1,
        id: keyboard[prev.i - 1][1].id
      }));
    }
    if (currentRef.i === 5) {
      setCurrentRef(prev => ({
        i: prev.i - 1,
        j: 0,
        id: keyboard[prev.i - 1][0].id
      }));
    }
  };

  const ArrowRight = () => {
    if (currentRef.i < 3) {
      if (currentRef.j + 1 < 3) {
        setCurrentRef(prev => ({
          ...prev,
          j: prev.j + 1,
          id: keyboard[prev.i][prev.j + 1].id
        }));
      } else {
        setCurrentRef(prev => ({
          i: prev.i + 1,
          j: 0,
          id: keyboard[prev.i + 1][0].id
        }));
      }
    }
    if (currentRef.i === 3) {
      if (currentRef.j + 1 < 2) {
        setCurrentRef(prev => ({
          ...prev,
          j: prev.j + 1,
          id: keyboard[prev.i][prev.j + 1].id
        }));
      } else {
        setCurrentRef(prev => ({
          i: prev.i + 1,
          j: 0,
          id: keyboard[prev.i + 1][0].id
        }));
      }
    }
    if (currentRef.i < 5 && currentRef.i > 3) {
      setCurrentRef(prev => ({
        i: prev.i + 1,
        j: 0,
        id: keyboard[prev.i + 1][0].id
      }));
    }
  };

  const ArrowUp = () => {
    if (currentRef.i > 0) {
      setCurrentRef(prev => ({
        ...prev,
        i: prev.i - 1,
        id: keyboard[prev.i - 1][prev.j].id
      }));
    }
  };

  const ArrowDown = () => {
    if (currentRef.i < 5) {
      if (currentRef.i < 2) {
        setCurrentRef(prev => ({
          ...prev,
          i: prev.i + 1,
          id: keyboard[prev.i + 1][prev.j].id
        }));
      }
      if (currentRef.i === 2) {
        if (currentRef.j < 2) {
          setCurrentRef(prev => ({
            j: 0,
            i: prev.i + 1,
            id: keyboard[prev.i + 1][0].id
          }));
        } else {
          setCurrentRef(prev => ({
            j: 1,
            i: prev.i + 1,
            id: keyboard[prev.i + 1][1].id
          }));
        }
      }
      if (currentRef.i > 2) {
        setCurrentRef(prev => ({
          j: 0,
          i: prev.i + 1,
          id: keyboard[prev.i + 1][0].id
        }));
      }
    }
  };

  useEffect(() => {
    const newKeyButton = keyButton[keyButton.length - 1];
    if (!isNaN(Number(newKeyButton)) && phoneNumber.length < 10) {
      setPhoneNumber(phoneNumber + newKeyButton);
    }
    if (newKeyButton === "Backspace") {
      setPhoneNumber(function() {
        return phoneNumber.slice(0, -1);
      });
    }
    if (newKeyButton === "ArrowLeft") {
      ArrowLeft();
    }
    if (newKeyButton === "ArrowRight") {
      ArrowRight();
    }
    if (newKeyButton === "ArrowUp") {
      ArrowUp();
    }
    if (newKeyButton === "ArrowDown") {
      ArrowDown();
    }
  }, [keyButton]);

  useEffect(() => {
    if (currentRef.id === "checkbox") {
      checkboxRef.current.focus();
    }
    if (currentRef.id === "submit") {
      submitRef.current.focus();
    }
  }, [currentRef]);

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
                buttonRef={currentRef.id}
              />
            );
          })}
        </div>
      </div>
      <div className="PanelCheckboxDiv">
        {valid ? (
          <label className="PanelCheckboxLabel">
            <input ref={checkboxRef} type="checkbox" onChange={HandlerToggle} />
            <span className="PanelCheckboxCustom"></span>
            <p className="PanelLabel">
              Согласие на обработку персональных&nbsp;данных
            </p>
          </label>
        ) : (
          <p className="ErrorMessage">Неверно введён номер</p>
        )}
      </div>
      <Link to="/promofinal">
        <button
          ref={submitRef}
          disabled={!checkbox && valid}
          className="PanelButton"
        >
          Подтвердить номер
        </button>
      </Link>
    </PanelContainer>
  );
};

export default Panel;

/*useEffect(()=>{
    const access_key =  b1462b38258555ce649108e432aaede6;
    const phone = phoneNumber;
    if(phoneNumber.length===10){
      fetch( 'http://apilayer.net/api/validate?access_key=' + access_key + '&number=' + phone_number + '&country_code=RU'+'&format=1')
      .then(res => res.json())
      .then(result => {
         setResponse(response);
        })
      .cath((error) => {
        setResponse(false)
      })
    } 
  )*/
