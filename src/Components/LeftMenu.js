import React from "react";
import "../Styles/LeftMenu.css";
import { Menu } from "./Menu";
import { MenuList } from "./MenuList";

import { FaMicrophoneAlt, FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";

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

      <div className="searchBox">
        <input type="text" placeholder="Search..." />
        <i className="searchIcon">
          <BiSearchAlt />
        </i>
      </div>

      <Menu title={"Menu"} menuObject={MenuList} />
    </div>
  );
}

export { LeftMenu };
