import { useState } from "react";

const useCalculator = () => {
  const [input, setInput] = useState("0");
  const [output, setOutput] = useState("0");

  const appendToInput = (value) => {
    const inputValue = document.getElementById("input");
    inputValue.value += value;

    if (value.match(/[+\-*\/]/g)) {
      setOutput(value);
    } else {
      const lastChar = inputValue.value.split(/[+\-*\/]/g).pop();
      setOutput(lastChar);
    }

    setInput(inputValue.value);
  };

  const clearInput = () => {
    const inputValue = document.getElementById("input");
    inputValue.value = "";

    setInput("0");
    setOutput("0");
  };

  const calculate = () => {
    const inputValue = document.getElementById("input");
    try {
      let result = eval(inputValue.value);

      if (result.toString().split(".")[1]) result = result.toFixed(2);

      setInput(`${input}=${result}`);
      setOutput(result);

      inputValue.value = result;
    } catch (error) {
      alert("Error en la expresión ingresada");
      clearInput();
    }
  };

  return {
    input,
    output,
    appendToInput,
    clearInput,
    calculate,
  };
};

export default useCalculator;
