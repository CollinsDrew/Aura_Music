import React from "react";
import "../Styles/LeftMenu.css";
import { Menu } from "./Menu";
import { MenuList } from "./MenuList";
import { MenuPlaylist } from "./MenuPlaylist";
import { TrackList } from "./TrackList";

import { GiCompactDisc } from "react-icons/gi";
import { FaMicrophoneAlt, FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

function LeftMenu() {
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <i>
          <GiCompactDisc />
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

      {/* <Link to="/"> */}
      <Menu title={"Menu"} menuObject={MenuList} />
      {/* </Link> */}

      <MenuPlaylist />
      {/* <TrackList /> */}
    </div>
  );
}

export { LeftMenu };
