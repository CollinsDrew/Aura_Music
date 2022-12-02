import React from "react";
import "../Styles/LeftMenu.css";

import { FaMicrophoneAlt, FaEllipsisH } from "react-icons/fa";

function LeftMenu() {
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <i>
          <FaMicrophoneAlt />
        </i>
        <h2>Aura</h2>
        <i>
          <FaEllipsisH />
        </i>
      </div>

      <div className="searchBox"></div>
    </div>
  );
}

export { LeftMenu };
