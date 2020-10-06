import React from "react";
import { SignUpForm } from "../SignUpForm/SignUpForm.component";
import { SignUpSocialNetwork } from "../SignUpSocialNetwork/SignUpSocialNetwork.component";

import "./ContentBody.styles.scss";

export function ContentBody() {
  return (
    <div className="content-body">
      <SignUpSocialNetwork />
      <p className="content-body-text">or sign up whit email</p>
      <SignUpForm />
      <p className="content-body-text">
        By signing up you agreed our Terms of Services and Privacy Policy
      </p>
      <p className="log-in-text">
        Already have account? <a href="./">Log in</a>
      </p>
    </div>
  );
}
