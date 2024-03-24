"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style/styles.css";
import "./style/switch.css";

import Card from "./component/Card";

const DrumMachine = () => {
  return (
    <div id="drum-machine">
      <div id="display">
        <Card />
      </div>
    </div>
  );
};

export default DrumMachine;
