import React from "react";
import Aura_Banner from "../Img/AuraBanner.png";
import Check from "../Img/check.png";

function Banner() {
  return (
    <div className="banner">
      <img src={Aura_Banner} alt="" className="bannerImage" />
    </div>
  );
}

export { Banner };
