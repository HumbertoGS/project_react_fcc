import { useState } from "react";

const useDrum = () => {
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

  return {
    msg,
    bank,
    power,
    vol,
    updateMsg,
    switchBank,
    switchPower,
    setVolumen,
  };
};

export default useDrum;
