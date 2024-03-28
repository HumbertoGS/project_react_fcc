"use client";

import { useState } from "react";

import { Button } from "react-bootstrap";
import useCalculator from "../hooks/useCalculator";
const Calculator = () => {
  const { input, output, appendToInput, clearInput, calculate } =
    useCalculator();
  //   const [input, setInput] = useState("0");
  //   const [output, setOutput] = useState("0");

  //   const appendToInput = (value) => {
  //     const inputValue = document.getElementById("input");
  //     inputValue.value += value;

  //     if (value.match(/[+\-*\/]/g)) {
  //       setOutput(value);
  //     } else {
  //       const lastChar = inputValue.value.split(/[+\-*\/]/g).pop();
  //       setOutput(lastChar);
  //     }

  //     setInput(inputValue.value);
  //   };

  //   const clearInput = () => {
  //     const inputValue = document.getElementById("input");
  //     inputValue.value = "";

  //     setInput("0");
  //     setOutput("0");
  //   };

  //   const calculate = () => {
  //     const inputValue = document.getElementById("input");
  //     try {
  //       let result = eval(inputValue.value);

  //       if (result.toString().split(".")[1]) result = result.toFixed(2);

  //       setInput(inputValue.value + "=" + result);
  //       setOutput(result);

  //       inputValue.value = result;
  //     } catch (error) {
  //       alert("Error en la expresión ingresada");
  //       clearInput();
  //     }
  //   };

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
