import React from "react";
import "./FormInput.styles.scss";

export function FormInput(props) {
  const className = `form-input ${props.className}`;

  return (
    <input type={props.type} placeholder={props.label} className={className} />
  );
}
