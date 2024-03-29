import React, { useState, useRef, useEffect } from "react";
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
import { renderMatches } from "react-router-dom";

function MusicPlayer({ song, imgSrc, songs }) {
  //   console.log(song, imgSrc);

  const [isLove, setLoved] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  // const [currentSong, setCurrentSong] = useState();

  const audioPlayer = useRef(); // Our audio tag
  const progressBar = useRef(); // Our progress bar
  const animationRef = useRef(); // Progress bar animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);

    setDuration(seconds);
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  // Play and pause track
  const changPlayPause = () => {
    const prevValue = isPlaying;
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }

    setPlaying(!prevValue);
  };

  //Skip back tracks

  const CalculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    // <10 print as 09 or 11,12 etc
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;

    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${returnMin}:${returnSec}`;
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeProgress = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changeCurrentTime();
  };

  const changeCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--player-played",
      `${(progressBar.current.value / duration) * 100}%`
    );

    setCurrentTime(progressBar.current.value);
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
          <div className="currentTime">{CalculateTime(currentTime)}</div>
          <input
            type="range"
            className="progressBar"
            ref={progressBar}
            onChange={changeProgress}
          />
          <div className="duration">
            {duration && !isNaN(duration) && CalculateTime(duration)
              ? CalculateTime(duration)
              : "00:00"}
          </div>
        </div>
      </div>
    </div>
  );
}

export { MusicPlayer };
