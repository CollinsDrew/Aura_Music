import React, { useState, useEffect } from "react";
import { Banner } from "./Banner.js";
import { MusicPlayer } from "./MusicPlayer.js";

import "../Styles/AudioList.css";
import "../Styles/MusicPlayer.css";
// import "../Styles/MainContainer.css";
import { Link, useParams } from "react-router-dom";
import { FaRegClock, FaHeart, FaRegHeart } from "react-icons/fa";

const danceSongs = [
  {
    id: 1,
    favourite: false,
    songName: "Speed",
    artist: "Alex Productions",
    song: process.env.PUBLIC_URL + "../Songs/alex-productions-speed.mp3",
    image: process.env.PUBLIC_URL + "/TrackImages/alexproductions_speed.jpeg",
  },
  {
    id: 2,
    favourite: false,
    songName: "HighFly",
    artist: "Jay Someday",
    song: process.env.PUBLIC_URL + "../Songs/jay-someday-highfly.mp3",
    image: process.env.PUBLIC_URL + "../TrackImages/jaysomeday_highfly.jpeg",
  },
  {
    id: 3,
    favourite: false,
    songName: "Get Away",
    artist: "Liqwyd",
    song: process.env.PUBLIC_URL + "../Songs/liqwyd-get-away.mp3",
    image: process.env.PUBLIC_URL + "../TrackImages/liqwyd-get-away.jpeg",
  },
  {
    id: 4,
    favourite: false,
    songName: "Mango",
    artist: "Tubebackr",
    song: process.env.PUBLIC_URL + "../Songs/tubebackr-mango.mp3",
    image: process.env.PUBLIC_URL + "../TrackImages/mango_tubebackr.jpeg",
  },
  {
    id: 5,
    favourite: false,
    songName: "Fight",
    artist: "Alex Productions",
    song: process.env.PUBLIC_URL + "../Songs/alex-productions-fight.mp3",
    image:
      process.env.PUBLIC_URL + "../TrackImages/alex-productions-fight.jpeg",
  },
];

function DanceTunes() {
  const [songs, setSongs] = useState(danceSongs);
  const [song, setSong] = useState(danceSongs[0].song);
  const [img, setImg] = useState(danceSongs.image);

  useEffect(() => {
    const songs = document.querySelectorAll(".songs");

    function changeMenuActive() {
      songs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    songs.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

  const changeFavourite = (id) => {
    danceSongs.forEach((song) => {
      if (song.id == id) {
        song.favourite = !song.favourite;
      }
    });

    setSongs([...danceSongs]);
  };

  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImg(imgSrc);
  };

  return (
    <div className="audioList">
      <Banner />
      <h2 className="title">
        Dance <span>{`${danceSongs.length} songs`} </span>
      </h2>

      <div className="songsContainer">
        {/* maybe change songs to danceSongs in map */}
        {songs &&
          songs.map((song, index) => (
            <div
              className="songs"
              key={song?.id}
              onClick={() => setMainSong(song?.song, song?.image)}
            >
              <div className="count">{`#${index + 1}`}</div>
              <div className="song">
                <div className="imgBox">
                  <img src={song?.image} alt="" />
                </div>

                <div className="section">
                  <p className="songName">
                    {song?.songName}{" "}
                    <span className="spanArtist">{song?.artist}</span>
                  </p>

                  <div className="hits">
                    <p className="duration">
                      <i>
                        <FaRegClock />
                      </i>
                    </p>
                  </div>

                  <div
                    className="favourite"
                    onClick={() => changeFavourite(song?.id)}
                  >
                    {song?.favourite ? (
                      <i>
                        <FaHeart />
                      </i>
                    ) : (
                      <i>
                        <FaRegHeart />
                      </i>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <MusicPlayer song={song} imgSrc={img} />
    </div>
  );
}

export { DanceTunes };
