import React from "react";
import "./FormInput.styles.scss";

export function FormInput(props) {
  return (
    <input type={props.type} placeholder={props.label} className="form-input" />
  );
}
