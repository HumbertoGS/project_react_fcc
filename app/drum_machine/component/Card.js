import { useState } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import SwitchBtn from "./button/SwitchBtn";
import ClickBtn from "./button/ClickBtn";

import { audioSound } from "../audioSound";
import { enableSound } from "../utils/enableSound";
import { findItem } from "../utils/findItem";

const { Piano, Heater } = audioSound;

const Card = () => {
  const [msg, setMsg] = useState("");
  const [vol, setVol] = useState(30);
  const [power, setPower] = useState(false);
  const [bank, setBank] = useState(false);

  const switchBank = (e) => {
    const check = e.target.checked;
    if (check) setMsg("Smooth Piano Kit");
    else setMsg("Heater Kit");
    setBank(check);
  };

  const switchPower = (e) => {
    const check = e.target.checked;
    setMsg("");
    setPower(check);
  };

  const setVolumen = (e) => {
    if (power) {
      setVol(e.target.value);
      setMsg("Volume: " + e.target.value);
    } else setMsg("");
  };

  const updateMsg = (x) => setMsg(x);

  if (typeof document !== "undefined") {
    document.addEventListener(
      "keydown",
      (event) => {
        const keyValue = event.key.toUpperCase();

        const item = bank ? Piano : Heater;
        const data = findItem(item, keyValue);

        if (data.sound) {
          enableSound(data.id, data.parentId, power, updateMsg, vol);
        }
      },
      false
    );
  }

  return (
    <div className="d-flex w-100">
      <div id="drum-pad" className="w-50">
        <Row className="content">
          {bank &&
            Piano?.map((item, index) => {
              return (
                <Col key={index} xs={4} sm={4} md={4}>
                  <ClickBtn
                    item={item}
                    power={power}
                    msg={updateMsg}
                    vol={vol}
                  />
                </Col>
              );
            })}

          {!bank &&
            Heater?.map((item, index) => {
              return (
                <Col key={index} xs={4} sm={4} md={4}>
                  <ClickBtn
                    item={item}
                    power={power}
                    msg={updateMsg}
                    vol={vol}
                  />
                </Col>
              );
            })}
        </Row>
      </div>

      <div id="controls-container" className="positionFlx gapPos w-50">
        <SwitchBtn
          label="Power"
          onChangeHandle={switchPower}
          disabled={false}
        />
        <div className="txtDisplay">
          <p>{msg}</p>
        </div>
        <div>
          <Form.Range value={vol} onChange={setVolumen} />
        </div>

        <SwitchBtn
          label="Bank"
          onChangeHandle={switchBank}
          disabled={power !== true}
        />
      </div>
    </div>
  );
};

export default Card;
