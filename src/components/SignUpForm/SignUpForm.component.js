import React from "react";
import { FormInput } from "../FormInput/FormInput.component";
import { RoundedButton } from "../RoundedButton/RoundedButton.component";
import "./SignUpForm.styles.scss";

export function SignUpForm() {
  return (
    <form className="sign-up-form">
      <FormInput type="text" label="First Name" />
      <FormInput type="text" label="Last Name" />
      <FormInput type="email" label="Your Email" />
      <FormInput
        type="password"
        label="Password"
        className="sign-up-last-input"
      />
      <RoundedButton buttonText="Submit" className="submit-button" />
    </form>
  );
}
