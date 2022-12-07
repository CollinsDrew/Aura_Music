import React from "react";
import "../Styles/AudioList.css";

import { FaRegClock, FaHeart, FaRegHeart } from "react-icons/fa";

function AudioList() {
  return (
    <div className="audioList">
      <h2 className="title">
        The List <span>x songs</span>
      </h2>

      <div className="songsContainer">
        <div className="songs">
          <div className="count">#01</div>
          <div className="song">
            <div className="imgBox">
              <img src="" alt="" />

              <div className="section">
                <p className="songName">
                  Sample <span className="spanArtist">Artist Name</span>
                </p>

                <div className="hits">
                  <p className="duration">
                    <i>
                      <FaRegClock />
                    </i>
                    00:00
                  </p>

                  <div className="favourite">
                    <i>
                      <FaHeart />
                    </i>
                    <i>
                      <FaRegHeart />
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { AudioList };
