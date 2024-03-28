"use client";

import Calculator from "./component/Calculator";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/style.css";
import "./styles/buttons.css";

const JavascriptCalculator = () => {
  return (
    <>
      <div className="content d-flex flex-column justify-content-center align-items-center">
        <div className="calculator">
          <Calculator />
        </div>

        <div className="pt-3 d-flex flex-column align-items-center">
          <label>Coded by</label>
          <label className="textAuthor">Humberto Guiracocha</label>
        </div>
      </div>
    </>
  );
};

export default JavascriptCalculator;
