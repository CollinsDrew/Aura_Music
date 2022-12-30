import React from "react";
import "../Styles/Cards.css";
import Country from "../Img/country_icon.png";
import HipHop from "../Img/hiphop_icon.png";
import Dance from "../Img/dance_icon.png";
import RnB from "../Img/rnb_icon.png";
import Punk from "../Img/punk_icon.png";
import Disco from "../Img/disco.png";

import { Link, useParams } from "react-router-dom";

function Cards() {
  return (
    <div className="cardContainer">
      <div className="cards">
        <img src={Country} alt="Country Music" />
        <h2 className="cardTitle">Country</h2>
        <h2>
          Yee-Haw! Check out these modern hits from upcoming country stars
        </h2>
      </div>

      <div className="cards">
        <img src={HipHop} alt="Hip Hop Music" />
        <h2 className="cardTitle">Hip Hop</h2>
        <h2>Your destination for the freshest hip-hop/rap</h2>
      </div>

      <div className="cards">
        <Link to="/dance">
          <img src={Dance} alt="Dance Music" />
          <h2 className="cardTitle">Dance</h2>
          <h2>Dance bangers for those good vibes only moments</h2>
        </Link>
      </div>

      <div className="cards">
        <img src={RnB} alt="R'n'B Music" />
        <h2 className="cardTitle">R'n'B</h2>
        <h2>For those smooth or hot R'n'B tunes, we got you</h2>
      </div>

      <div className="cards">
        <img src={Punk} alt="Punk Music" />
        <h2 className="cardTitle">Punk</h2>
        <h2>The newest Punk music you need in your life</h2>
      </div>

      <div className="cards">
        <img src={Disco} alt="Disco Music" />
        <h2 className="cardTitle">Disco</h2>
        <h2>Get your groove on to these disco floor fillers</h2>
      </div>
    </div>
  );
}

export { Cards };
