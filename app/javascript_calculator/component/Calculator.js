"use client";

import useCalculator from "../hooks/useCalculator";

import { Button } from "react-bootstrap";

const Calculator = () => {
  const { input, output, appendToInput, clearInput, calculate } =
    useCalculator();

  return (
    <>
      <input type="text" id="input" className="input-display" disabled />
      <div className="display">
        <label className="input">{input}</label>
        <label className="output">{output}</label>
      </div>
      <div className="buttons d-flex justify-content-center">
        <div className="contentButton">
          <div className="d-flex flex-wrap justify-content-end w-100">
            <Button
              className="btnStyle btnClear w-66"
              onClick={() => clearInput()}
            >
              AC
            </Button>
            <Button
              className="btnStyle w-33"
              onClick={() => appendToInput("/")}
            >
              /
            </Button>
          </div>
          <div className="d-flex flex-wrap justify-content-end w-100">
            <Button
              className="btnNumber btnStyle w-33"
              onClick={() => appendToInput("7")}
            >
              7
            </Button>
            <Button
              className="btnNumber btnStyle w-33"
              onClick={() => appendToInput("8")}
            >
              8
            </Button>
            <Button
              className="btnNumber btnStyle w-33"
              onClick={() => appendToInput("9")}
            >
              9
            </Button>
            <Button
              className="btnNumber btnStyle w-33"
              onClick={() => appendToInput("4")}
            >
              4
            </Button>
            <Button
              className="btnNumber btnStyle w-33"
              onClick={() => appendToInput("5")}
            >
              5
            </Button>
            <Button
              className="btnNumber btnStyle w-33"
              onClick={() => appendToInput("6")}
            >
              6
            </Button>
            <Button
              className="btnNumber btnStyle w-33"
              onClick={() => appendToInput("1")}
            >
              1
            </Button>
            <Button
              className="btnNumber btnStyle w-33"
              onClick={() => appendToInput("2")}
            >
              2
            </Button>
            <Button
              className="btnNumber btnStyle w-33"
              onClick={() => appendToInput("3")}
            >
              3
            </Button>
            <Button
              className="btnNumber btnStyle w-66"
              onClick={() => appendToInput("0")}
            >
              0
            </Button>
            <Button
              className="btnNumber btnStyle w-33"
              onClick={() => appendToInput(".")}
            >
              .
            </Button>
          </div>
        </div>
        <div className="d-flex flex-column contentButtonOperation">
          <Button className="btnStyle h-20" onClick={() => appendToInput("*")}>
            X
          </Button>
          <Button className="btnStyle h-20" onClick={() => appendToInput("-")}>
            -
          </Button>
          <Button className="btnStyle h-20" onClick={() => appendToInput("+")}>
            +
          </Button>
          <Button
            className="btnStyle btnEquals h-40"
            onClick={() => calculate()}
          >
            =
          </Button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
