import React, { useState } from "react";
import "../Styles/MusicPlayer.css";

import {
  FaBackward,
  FaForward,
  FaHeart,
  FaPause,
  FaPlay,
  FaRegHeart,
  FaShareAlt,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

function MusicPlayer({ song, imgSrc }) {
  //   console.log(song, imgSrc);

  const [isLove, setLoved] = useState(false);
  const [isPlaying, setPlaying] = useState(false);

  const changPlayPause = () => {
    setPlaying(!isPlaying);
  };

  const changeLoved = () => {
    setLoved(!isLove);
  };

  return (
    <div className="MusicPlayer">
      <div className="songImage"></div>
      <div className="songAttributes">
        <audio src={song} preload="metadata" />

        <div className="top">
          <div className="left">
            <div className="loved" onClick={changeLoved}>
              {isLove ? (
                <i>
                  <FaHeart />
                </i>
              ) : (
                <i>
                  <FaRegHeart />
                </i>
              )}
            </div>

            {/* download icon optional */}
            <div className="download">
              <i>
                <BsDownload />
              </i>
            </div>
          </div>
          <div className="middle">
            <div className="back">
              <i>
                <FaStepBackward />
              </i>
              <i>
                <FaBackward />
              </i>
            </div>
            <div className="playPause" onClick={changPlayPause}>
              {isPlaying ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="forward">
              <i>
                <FaForward />
              </i>
              <i>
                <FaStepForward />
              </i>
            </div>
          </div>
          <div className="right">
            <i>
              <FaShareAlt />
            </i>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
}

export { MusicPlayer };
