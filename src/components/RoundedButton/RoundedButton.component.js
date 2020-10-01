import React from "react";
import "./RoundedButton.styles.scss";

export function RoundedButton(props) {
  let backgroundColorClass = "";
  if (props.socialNetwork) {
    backgroundColorClass = "rounded-button-" + props.socialNetwork;
  }

  return (
    <button className={"rounded-button " + backgroundColorClass}>
      {props.iconButton}
      <span>{props.buttonText}</span>
    </button>
  );
}
