import React from "react";
import "./styles/Display.css";

const Display = ({ input, setInput, answer }) => {
  // Handles changes in the input field
  const onChangeTagInput = (e) => {
    // Regular expression to match valid calculator input characters
    const re = /^[%-+\x2D-9^x\xF7]+$/;

    // If the input is empty or matches the regular expression, update the input state
    if (e.target.value === "" || re.test(e.target.value)) {
      setInput(e.target.value);
    }
  };

  return (
    <>
      <div className="display">
        {/* If there is no answer, show the input field for user input */}
        {answer === "" ? (
          <>
            <input
              type="text"
              name="input"
              className="input"
              style={{ padding: "29px" }}
              value={input}
              placeholder="0"
              maxLength={12} // Limit input length to 12 characters
              onChange={onChangeTagInput}
              autoComplete="off"
            />
          </>
        ) : (
          // If there is an answer, show the input field with the input and answer fields
          <>
            <input
              type="text"
              name="input"
              className="value"
              value={input}
              placeholder="0"
              maxLength={12} // Limit input length to 12 characters
              disabled // Disable the input field
            />
            <input
              type="text"
              name="value"
              className="input"
              value={answer}
              disabled // Disable the answer field
            />
          </>
        )}
      </div>
    </>
  );
};

export default Display;
