import React from "react";

export default function ColorPalette(props) {
  const containerStyle = {
    backgroundColor: props.mode === "dark" ? "#2c3136" : "white",
    borderRadius: "100px",
    border: "1px solid grey",
  };

  const btnStyle = {
    borderRadius: "100px",
  };

  const onClick = (colorTheme) => {
    props.setColorTheme(colorTheme);
  };

  return (
    <div className="p-2 d-flex mx-3" style={containerStyle}>
      <div className={`text-${props.mode === "light" ? "dark" : "light"} me-2`}>
        Theme
      </div>
      <button
        className="btn btn-primary me-2"
        type="button"
        style={btnStyle}
        onClick={() => {
          onClick("primary");
        }}
      ></button>
      <button
        type="button"
        className="btn btn-success me-2"
        style={btnStyle}
        onClick={() => {
          onClick("success");
        }}
      ></button>
      <div
        className="btn btn-danger me-2"
        style={btnStyle}
        onClick={() => {
          onClick("danger");
        }}
      ></div>
      <div
        className="btn btn-warning"
        style={btnStyle}
        onClick={() => {
          onClick("warning");
        }}
      ></div>
    </div>
  );
}
