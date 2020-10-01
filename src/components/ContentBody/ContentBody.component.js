import React from "react";
import { SignUpForm } from "../SignUpForm/SignUpForm.component";
import { SignUpSocialNetwork } from "../SignUpSocialNetwork/SignUpSocialNetwork.component";

import "./ContentBody.styles.scss";

export function ContentBody() {
  return (
    <div>
      <SignUpSocialNetwork />
      <p>or sign up whit email</p>
      <SignUpForm />
    </div>
  );
}
