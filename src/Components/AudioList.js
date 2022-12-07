import React, { useState } from "react";
import "../Styles/AudioList.css";

import { FaRegClock, FaHeart, FaRegHeart } from "react-icons/fa";

function AudioList() {
  // const [song, setSong] = useState (Songs[0].song);
  // const [img, setImage] = useState (Songs[0].imgSrc);

  return (
    <div className="audioList">
      <h2 className="title">
        {/* In span tag `${songs.length} songs` */}
        The List <span>x songs</span>
      </h2>

      <div className="songsContainer">
        {/* {
            songs && songs.map((song, index) => (

            ))
          } */}

        {/* the songs div needs to be moved in to the map */}
        {/* key ={song.id} */}
        <div className="songs">
          {/* `#${index + 1}` */}
          <div className="count">#01</div>
          <div className="song">
            <div className="imgBox">
              <img src="" alt="" />

              <div className="section">
                <p className="songName">
                  {/* {song?.songName} */}
                  Sample <span className="spanArtist">Artist Name</span>
                </p>
                {/* {song?.artist} */}

                <div className="hits">
                  <p className="duration">
                    <i>
                      <FaRegClock />
                    </i>
                    00:00
                  </p>

                  <div className="favourite">
                    {/* {song?.favourite ?
                    FaHeart
                  : FaRegHeart} */}

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
