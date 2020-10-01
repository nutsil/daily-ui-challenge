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
      <p>By signing up you agreed our Terms of Services and Privacy Policy</p>
      <p>
        Already have account? <a href="./">Log in</a>
      </p>
    </div>
  );
}
