import React from "react";
import "../Styles/Cards.css";
import Country from "../Img/country_icon.png";
import HipHop from "../Img/hiphop_icon.png";
import Dance from "../Img/dance_icon.png";
import RnB from "../Img/rnb_icon.png";
import Punk from "../Img/punk_icon.png";
import Disco from "../Img/disco.png";

function Cards() {
  return (
    <div className="cardContainer">
      <div className="cards">
        <img src={Country} alt="Country Music" />
        <h2>
          Yee-Haw! Check out these modern hits from upcoming country stars
        </h2>
      </div>

      <div className="cards">
        <img src={HipHop} alt="Hip Hop Music" />
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit
          amet dictum augue.
        </h2>
      </div>

      <div className="cards">
        <img src={Dance} alt="Dance Music" />
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit
          amet dictum augue.
        </h2>
      </div>

      <div className="cards">
        <img src={RnB} alt="R'n'B Music" />
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit
          amet dictum augue.
        </h2>
      </div>

      <div className="cards">
        <img src={Punk} alt="Punk Music" />
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit
          amet dictum augue.
        </h2>
      </div>

      <div className="cards">
        <img src={Disco} alt="Disco Music" />
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit
          amet dictum augue.
        </h2>
      </div>
    </div>
  );
}

export { Cards };
