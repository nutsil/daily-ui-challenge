import React from "react";
import "./RoundedButton.styles.scss";

export function RoundedButton(props) {
  let backgroundColorClass = "";
  if (props.socialNetwork) {
    backgroundColorClass = "rounded-button-" + props.socialNetwork;
  }

  //template literals

  const className = `rounded-button ${backgroundColorClass} ${props.className}`;

  return (
    <button className={className}>
      {props.iconButton}
      <span>{props.buttonText}</span>
    </button>
  );
}
