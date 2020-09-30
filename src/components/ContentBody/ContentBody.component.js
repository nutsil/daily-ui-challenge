import React from "react";
import { RoundedButton } from "../RoundedButton/RoundedButton.component";
import "./ContentBody.styles.scss";

export function ContentBody() {
  return (
    <div>
      <RoundedButton socialNetwork="facebook" buttonText="Facebook" />
      <RoundedButton socialNetwork="twitter" buttonText="Twitter" />
    </div>
  );
}
