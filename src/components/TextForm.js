import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperCase = () => {
    let temp = text.toUpperCase();
    setText(temp);
    props.showAlert("Converted to Upper Case.", "success");
  };

  const handleLowerCase = () => {
    let temp = text.toLowerCase();
    setText(temp);
    props.showAlert("Converted to Lower Case.", "success");
  };

  const handleInverseCase = () => {
    let temp = "";
    for (var index = 0; index < text.length; index++) {
      if (text.charAt(index) === text.charAt(index).toLowerCase()) {
        temp = temp + text.charAt(index).toUpperCase();
      } else if (text.charAt(index) === text.charAt(index).toUpperCase()) {
        temp = temp + text.charAt(index).toLowerCase();
      }
    }
    console.log(temp);

    setText(temp);

    props.showAlert("Cases are inverted.", "success");
  };

  const handleCapitalisedCase = () => {
    let temp = "";

    for (let index = 0; index < text.length; index++) {
      if (index === 0) {
        temp = temp + text.charAt(index).toUpperCase();
      } else if (text.charAt(index - 1) === " ") {
        temp = temp + text.charAt(index).toUpperCase();
      } else {
        temp = temp + text.charAt(index).toLowerCase();
      }
    }

    setText(temp);
    props.showAlert("Converted to Capital Case.", "success");
  };

  const handleAlternateCase = () => {
    let temp = "";
    for (var index = 0; index < text.length; index++) {
      if (index % 2 === 0) {
        temp = temp + text.charAt(index).toUpperCase();
      } else {
        temp = temp + text.charAt(index).toLowerCase();
      }
    }
    console.log(temp);

    setText(temp);
    props.showAlert("Converted to Alternate Case.", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);

    props.showAlert("Text Copied to Clipboard", "success");
  };

  const handleExtraSpaces = () => {
    let temp = text.replace(/\s+/g, " ").trim();
    setText(temp);

    props.showAlert("Extra spaces have been removed.", "success");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text cleared.", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  const inverseMode = props.mode === "light" ? "dark" : "light";
  const wordCount =
    text.length === 0 ? 0 : text.replace(/\s+/g, " ").trim().split(" ").length;

  return (
    <>
      <div className="container my-4">
        <h1 className={`mb-3 text-${inverseMode}`}>Enter Text to analyze</h1>
        <div className="mb-3">
          <textarea
            className={`form-control text-${inverseMode}`}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#2c3136",
            }}
            id="text-box"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="d-flex flex-wrap">
          <button
            className={`btn btn-${props.colorTheme} me-2 mb-2`}
            onClick={handleUpperCase}
            disabled={text.length === 0}
          >
            Upper Case
          </button>
          <button
            className={`btn btn-${props.colorTheme} me-2 mb-2`}
            onClick={handleLowerCase}
            disabled={text.length === 0}
          >
            Lower Case
          </button>
          <button
            className={`btn btn-${props.colorTheme} me-2 mb-2`}
            onClick={handleInverseCase}
            disabled={text.length === 0}
          >
            Inverse Case
          </button>
          <button
            className={`btn btn-${props.colorTheme} me-2 mb-2`}
            onClick={handleCapitalisedCase}
            disabled={text.length === 0}
          >
            Capitalised Case
          </button>
          <button
            className={`btn btn-${props.colorTheme} me-2 mb-2`}
            onClick={handleAlternateCase}
            disabled={text.length === 0}
          >
            Alternate Case
          </button>
          <button
            className={`btn btn-${props.colorTheme} me-2 mb-2`}
            onClick={handleExtraSpaces}
            disabled={text.length === 0}
          >
            Remove Extra Spaces
          </button>
          <button
            className={`btn btn-${props.colorTheme} me-2 mb-2`}
            onClick={handleCopy}
            disabled={text.length === 0}
          >
            Copy Text
          </button>
          <button
            className={`btn btn-${props.colorTheme} me-2 mb-2`}
            onClick={handleClear}
            disabled={text.length === 0}
          >
            Clear
          </button>
        </div>
        <div className={`container mx-0 px-0 my-3 text-${inverseMode}`}>
          <h2>Your text summary</h2>
          <p>
            Your Text has <strong>{wordCount}</strong> words and{" "}
            <strong>{text.length}</strong> characters
          </p>
          <p>
            It can be read in <strong>{wordCount * 0.008} Minutes</strong>
          </p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Nothing to preview here."}</p>
        </div>
      </div>
    </>
  );
}
