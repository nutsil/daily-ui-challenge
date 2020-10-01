import React from "react";
import "./SignUpSocialNetwork.styles.scss";
import { RoundedButton } from "../RoundedButton/RoundedButton.component";
import facebookIconSRC from "../../assets/images/facebook-icon.svg";
import twitterIconSRC from "../../assets/images/twitter-icon.svg";

export function SignUpSocialNetwork() {
  return (
    <div>
      <RoundedButton
        socialNetwork="facebook"
        buttonText="Facebook"
        iconButton={
          <img src={facebookIconSRC} width="27" height="27" alt="Facebook" />
        }
        className="social-network-button"
      />
      <RoundedButton
        socialNetwork="twitter"
        buttonText="Twitter"
        iconButton={
          <img src={twitterIconSRC} width="27" height="27" alt="Twitter" />
        }
        className="social-network-button"
      />
    </div>
  );
}
