import React from "react";
import "../Styles/RightMenu.css";
import { BsFillFilePersonFill } from "react-icons/bs";
import { FaUpload } from "react-icons/fa";

function RightMenu() {
  return (
    <div className="rightMenu">
      <div className="profile">
        <i>
          <BsFillFilePersonFill />
        </i>
      </div>
      <div className="upload">
        <i>
          <FaUpload />
          <p>Submit Tracks</p>
        </i>
      </div>
    </div>
  );
}

export { RightMenu };
