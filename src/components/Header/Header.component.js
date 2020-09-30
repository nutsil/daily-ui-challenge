import React from "react";
import "./Header.styles.scss";

export function Header() {
  return (
    <header>
      <button className="header-back-button">
        <img
          src="http://placekitten.com/27/27"
          alt="Back to home"
          width="27"
          height="27"
        />
      </button>
    </header>
  );
}
