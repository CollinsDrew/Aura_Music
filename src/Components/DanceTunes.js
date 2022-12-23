import React, { useState } from "react";
import { Banner } from "./Banner.js";
import "../Styles/AudioList.css";
// import "../Styles/MainContainer.css";
import { Link, useParams } from "react-router-dom";
import { FaRegClock, FaHeart, FaRegHeart } from "react-icons/fa";
// import soundfile from "../Songs";

const danceSongs = [
  {
    id: 1,
    favourite: false,
    songName: "Speed",
    artist: "Alex Productions",
    song: "../Songs/alex-productions-speed.mp3",
    image: "../TrackImages/alexproductions-speed.jpeg",
  },
  {
    id: 2,
    favourite: false,
    songName: "HighFly",
    artist: "Jay Someday",
    song: "../Songs/jay-someday-highfly.mp3",
    image: "../TrackImages/jaysomeday-highfly.jpeg",
  },
  {
    id: 2,
    favourite: false,
    songName: "Get Away",
    artist: "Liqwyd",
    song: "../Songs/liqwyd-get-away.mp3",
    image: "../TrackImages/liqwyd-get-away.jpeg",
  },
];

function DanceTunes() {
  return (
    <div className="audioList">
      <Banner />
      <h2 className="title">
        Country <span>{`${danceSongs.length} songs`} </span>
      </h2>

      <div className="songsContainer">
        {danceSongs &&
          danceSongs.map((song, index) => (
            <div className="songs" key={song?.id}>
              <div className="count">{`#${index + 1}`}</div>
              <div className="song">
                <div className="imgBox">
                  <img src={song?.image} alt="" />
                </div>

                <div className="section">
                  <p className="songName">
                    Sample <span className="spanArtist">Artist Name</span>
                  </p>

                  <div className="hits">
                    <p className="duration">
                      <i>
                        <FaRegClock />
                      </i>
                    </p>
                  </div>

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
          ))}
      </div>
    </div>
  );
}

export { DanceTunes };
