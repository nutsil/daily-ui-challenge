import React from "react";
import { RoundedButton } from "../RoundedButton/RoundedButton.component";
import "./ContentBody.styles.scss";

export function ContentBody() {
  return (
    <div>
      <RoundedButton
        socialNetwork="facebook"
        buttonText="Facebook"
        iconButton={
          <img
            src="http://placekitten.com/27/27"
            width="27"
            height="27"
            alt="Facebook"
          />
        }
      />
      <RoundedButton
        socialNetwork="twitter"
        buttonText="Twitter"
        iconButton={
          <img
            src="http://placekitten.com/27/27"
            width="27"
            height="27"
            alt="Twitter"
          />
        }
      />
    </div>
  );
}
