import React from "react";
import "./RoundedButton.styles.scss";

export function RoundedButton(props) {
  let backgroundColorClass = "";
  if (props.socialNetwork) {
    backgroundColorClass = "rounded-button-" + props.socialNetwork;
  }

  return (
    <button className={"rounded-button " + backgroundColorClass}>
      <img
        src="http://placekitten.com/27/27"
        width="27"
        height="27"
        alt={props.buttonText}
      />
      <span>{props.buttonText}</span>
    </button>
  );
}
