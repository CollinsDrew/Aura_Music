import React, { useState, useRef } from "react";
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

  const audioPlayer = useRef(); // Our audio tag
  const progressBar = useRef(); // Our progress bar

  const changPlayPause = () => {
    const prevValue = isPlaying;
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }

    setPlaying(!prevValue);
  };

  const changeLoved = () => {
    setLoved(!isLove);
  };

  return (
    <div className="MusicPlayer">
      <div className="songImage">
        <img src={imgSrc} />
      </div>
      <div className="songAttributes">
        <audio src={song} preload="metadata" ref={audioPlayer} />

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
        <div className="bottom">
          <div className="currentTime">00:00</div>
          <input type="range" className="progressBar" ref={progressBar} />
          <div className="duration">00:00</div>
        </div>
      </div>
    </div>
  );
}

export { MusicPlayer };
