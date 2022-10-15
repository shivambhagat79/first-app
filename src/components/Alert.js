import React from "react";

export default function Alert(props) {
  return (
    <div style={{ height: "40px" }}>
      {props.alert && (
        <div className="container mt-1">
          <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show`}
            role="alert"
          >
            {props.alert.message}
          </div>
        </div>
      )}
    </div>
  );
}
