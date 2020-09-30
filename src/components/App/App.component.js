import React from "react";
import { ContentBody } from "../ContentBody/ContentBody.component";
import { Header } from "../Header/Header.component";
import "./App.styles.scss";

export function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <ContentBody />
    </div>
  );
}
