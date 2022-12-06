import React from "react";
import Aura_Banner from "../Img/AuraBanner.png";
import Check from "../Img/check.png";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";

function Banner() {
  return (
    <div className="banner">
      <img src={Aura_Banner} alt="Aura Banner" className="bannerImage" />

      <div className="bottomLayer"></div>

      {/* <div className="content">
        <div className="breadCrumb">
          <p>Home</p>

          <i>
            <FaEllipsisH />
          </i>
        </div>
        
      </div> */}
    </div>
  );
}

export { Banner };
