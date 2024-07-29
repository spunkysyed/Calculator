import React from "react";
import "./styles/Buttons.css";

const Buttons = ({ inputHandler, clearInput, changePlusMinus, calculateAns }) => {
  // Add event listener to handle Enter key press for calculating the answer
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent default action of Enter key
      document.getElementById("equalbtn").click(); // Simulate click on the equal button
    }
  });

  return (
    <div className="show-btn">
      {/* Clear button */}
      <button className="btn clr" onClick={clearInput}>
        AC
      </button>
      {/* Plus/Minus button */}
      <button className="btn exp" onClick={changePlusMinus}>
        +/-
      </button>
      {/* Percentage button */}
      <button className="btn exp" onClick={inputHandler}>
        %
      </button>
      {/* Division button */}
      <button className="btn exp" onClick={inputHandler}>
        ÷
      </button>
      {/* Number buttons */}
      <button className="btn" onClick={inputHandler}>
        7
      </button>
      <button className="btn" onClick={inputHandler}>
        8
      </button>
      <button className="btn" onClick={inputHandler}>
        9
      </button>
      {/* Multiplication button */}
      <button className="btn exp" onClick={inputHandler}>
        x
      </button>
      <button className="btn" onClick={inputHandler}>
        4
      </button>
      <button className="btn" onClick={inputHandler}>
        5
      </button>
      <button className="btn" onClick={inputHandler}>
        6
      </button>
      {/* Subtraction button */}
      <button className="btn exp" onClick={inputHandler}>
        -
      </button>
      <button className="btn" onClick={inputHandler}>
        1
      </button>
      <button className="btn" onClick={inputHandler}>
        2
      </button>
      <button className="btn" onClick={inputHandler}>
        3
      </button>
      {/* Addition button */}
      <button className="btn exp" onClick={inputHandler}>
        +
      </button>
      {/* Zero button */}
      <button className="btn" onClick={inputHandler}>
        0
      </button>
      {/* Decimal point button */}
      <button className="btn exp" onClick={inputHandler}>
        .
      </button>
      {/* Equal button for calculating the answer */}
      <button className="btn exp equal" id="equalbtn" onClick={calculateAns}>
        =
      </button>
    </div>
  );
};

export default Buttons;
