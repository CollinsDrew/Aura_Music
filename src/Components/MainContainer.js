import React from "react";
import "../Styles/MainContainer.css";
import { Banner } from "./Banner.js";
import { Cards } from "./Cards";

function MainContainer() {
  return (
    <div className="mainContainer">
      <Banner />
      <Cards />
    </div>
  );
}

export { MainContainer };
