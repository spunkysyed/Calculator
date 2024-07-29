import React, { useState } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import "./styles/Calculator.css";
import { evaluate, round } from "mathjs";

function Calculator() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  // Handles button clicks and updates the input field
  const inputHandler = (event) => {
    if (answer === "Invalid Input!!") return; // Prevent input if the last answer was invalid
    let val = event.target.innerText; // Get the text of the clicked button

    let str = input + val;
    if (str.length > 14) return; // Prevent input if the length exceeds 14 characters

    if (answer !== "") {
      setInput(answer + val); // If there's an answer, start a new input with the answer as the base
      setAnswer("");
    } else {
      setInput(str); // Otherwise, add to the current input
    }
  };

  // Clears the input and answer fields
  const clearInput = () => {
    setInput("");
    setAnswer("");
  };

  // Calculates the final answer based on the input
  const calculateAns = () => {
    if (input === "") return; // Do nothing if the input is empty
    let result = 0;
    let finalexpression = input;
    finalexpression = finalexpression.replaceAll("x", "*"); // Replace multiplication symbol
    finalexpression = finalexpression.replaceAll("÷", "/"); // Replace division symbol

    try {
      result = evaluate(finalexpression); // Use mathjs to evaluate the expression
      setAnswer(round(result, 3)); // Round the result to 3 decimal places
    } catch (error) {
      setAnswer("Invalid Input!!"); // Set error message if the evaluation fails
    }
  };

  // Toggles the prefix of the current input or answer between + and -
  const changePlusMinus = () => {
    if (answer === "Invalid Input!!") return; // Do nothing if the last answer was invalid

    // If there's an answer, change its prefix
    if (answer !== "") {
      let ans = answer.toString();
      if (ans.charAt(0) === "-") {
        setInput("+" + ans.slice(1));
      } else if (ans.charAt(0) === "+") {
        setInput("-" + ans.slice(1));
      } else {
        setInput("-" + ans);
      }
      setAnswer("");
    } else { // Otherwise, change the prefix of the current input
      if (input.charAt(0) === "-") {
        setInput("+" + input.slice(1));
      } else if (input.charAt(0) === "+") {
        setInput("-" + input.slice(1));
      } else {
        setInput("-" + input);
      }
    }
  };

  return (
    <>
      <div className="calculator-container">
        <h1 className="calculator-heading">CALCULATOR</h1>
        <hr />
        <div className="container">
          <div className="main">
            {/* Display component shows the current input and answer */}
            <Display input={input} setInput={setInput} answer={answer} />
            {/* Buttons component contains all the calculator buttons */}
            <Buttons
              inputHandler={inputHandler}
              clearInput={clearInput}
              changePlusMinus={changePlusMinus}
              calculateAns={calculateAns}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
