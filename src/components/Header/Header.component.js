import React from "react";
import "./Header.styles.scss";
import backArrowIconSRC from "../../assets/images/back-arrow.svg";

export function Header() {
  return (
    <header className="header">
      <button className="header-back-button">
        <img src={backArrowIconSRC} alt="Back to home" width="27" height="27" />
      </button>
      <h1 className="header-section-title">Sign Up</h1>
    </header>
  );
}
