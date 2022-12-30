import React, { useState, useEffect } from "react";
import { Banner } from "./Banner.js";
import { MusicPlayer } from "./MusicPlayer.js";

import "../Styles/AudioList.css";
import "../Styles/MusicPlayer.css";
// import "../Styles/MainContainer.css";
import { Link, useParams } from "react-router-dom";
import { FaRegClock, FaHeart, FaRegHeart } from "react-icons/fa";

const countrySongs = [
  {
    id: 1,
    favourite: false,
    songName: "Going Through The Motions",
    artist: "Sleepaway Camp",
    song: process.env.PUBLIC_URL + "../Songs/sleepawaycamp-motions.mp3",
    image: process.env.PUBLIC_URL + "/TrackImages/goingThroughTheMotions.jpeg",
  },
  {
    id: 2,
    favourite: false,
    songName: "April Showers",
    artist: "Big Girl",
    song: process.env.PUBLIC_URL + "../Songs/April_Showers-Big_Girl.mp3",
    image: process.env.PUBLIC_URL + "../TrackImages/aprilShowers.jpeg",
  },
  {
    id: 3,
    favourite: false,
    songName: "Aeroplane",
    artist: "Noah Amos",
    song: process.env.PUBLIC_URL + "../Songs/Aero-Plane-AmosNoah.mp3",
    image: process.env.PUBLIC_URL + "../TrackImages/AmosNoah.jpeg",
  },
  {
    id: 4,
    favourite: false,
    songName: "Good Aint Gone",
    artist: "Rex Hobart & The Misery Boy's",
    song:
      process.env.PUBLIC_URL +
      "../Songs/Rex-Hobart-and-Misery-Boys-GoodAin'tGone.mp3",
    image: process.env.PUBLIC_URL + "../TrackImages/rexHobart.jpeg",
  },
  {
    id: 5,
    favourite: false,
    songName: "Pasture",
    artist: "Trailer Bride",
    song: process.env.PUBLIC_URL + "../Songs/TrailerBride-Pasture.mp3",
    image: process.env.PUBLIC_URL + "../TrackImages/trailerBride.jpeg",
  },
  //   {
  //     id: 6,
  //     favourite: false,
  //     songName: "Miss You",
  //     artist: "Liqwyd",
  //     song: process.env.PUBLIC_URL + "../Songs/liqwyd-miss-you.mp3",
  //     image: process.env.PUBLIC_URL + "../TrackImages/missyou_liqwyd.jpeg",
  //   },
  //   {
  //     id: 7,
  //     favourite: false,
  //     songName: "Limujii",
  //     artist: "Xii",
  //     song: process.env.PUBLIC_URL + "../Songs/limujii-xii.mp3",
  //     image: process.env.PUBLIC_URL + "../TrackImages/xii-lumijii.jpeg",
  //   },
  //   {
  //     id: 8,
  //     favourite: false,
  //     songName: "Keep Me",
  //     artist: "Peyruis",
  //     song: process.env.PUBLIC_URL + "../Songs/peyruis-keep-me.mp3",
  //     image: process.env.PUBLIC_URL + "../TrackImages/keepme-peyruis.jpeg",
  //   },
  //   {
  //     id: 9,
  //     favourite: false,
  //     songName: "Magical Journey Through Space",
  //     artist: "Leonell Cassio",
  //     song:
  //       process.env.PUBLIC_URL +
  //       "../Songs/leonell-cassio-magical-journey-through-space.mp3",
  //     image: process.env.PUBLIC_URL + "../TrackImages/leonell_magical.jpeg",
  //   },
  //   {
  //     id: 10,
  //     favourite: false,
  //     songName: "Vibin '53",
  //     artist: "Peyruis",
  //     song: process.env.PUBLIC_URL + "../Songs/peyruis-vibin-53.mp3",
  //     image: process.env.PUBLIC_URL + "../TrackImages/peyruis-vibin.jpeg",
  //   },
];

function CountryTunes() {
  const [songs, setSongs] = useState(countrySongs);
  const [song, setSong] = useState(countrySongs[0].song);
  const [img, setImg] = useState(countrySongs.image);

  useEffect(() => {
    const songs = document.querySelectorAll(".songs");

    function changeMenuActive() {
      songs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    songs.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

  const changeFavourite = (id) => {
    countrySongs.forEach((song) => {
      if (song.id == id) {
        song.favourite = !song.favourite;
      }
    });

    setSongs([...countrySongs]);
  };

  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImg(imgSrc);
  };

  return (
    <div className="audioList">
      <Banner />
      <h2 className="title">
        Country <span>{`${countrySongs.length} songs`} </span>
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

export { CountryTunes };
