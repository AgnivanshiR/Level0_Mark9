import "./styles.css";
import React, { useState } from "react";

var musicDB = {
  jazz: [
    {
      name: "My Way- Frank Sinatra",
      rating: "❤️❤️❤️❤️❤️",
      link: "https://music.youtube.com/watch?v=Qp6D71kQRhA"
    },
    {
      name: "What A Wonderful World- Louis Armstrong",
      rating: "❤️❤️❤️❤️❤",
      link: "https://music.youtube.com/watch?v=VqhCQZaH4Vs"
    }
  ],

  rock: [
    {
      name: "In the End- linkin park",
      rating: "❤️❤️❤️❤️❤️",
      link: "https://music.youtube.com/watch?v=eVTXPUF4Oz4"
    },
    {
      name: "Boulevard of Broken Dreams- Green Day",
      rating: "❤️❤️❤️❤️❤",
      link: "https://music.youtube.com/watch?v=Soa3gO7tL-c"
    }
  ],

  indian: [
    {
      name: "Khamoshiyan- Arjit Singh",
      rating: "❤️❤️❤️❤️❤️",
      link: "https://music.youtube.com/watch?v=Mv3SZDP7QUo"
    },
    {
      name: "Moh Moh ke Dhage- Papon",
      rating: "❤️❤️❤️❤️❤",
      link: "https://music.youtube.com/watch?v=X4rEsj4z7MY"
    }
  ]
};

export default function App() {
  var [selectedGenre, setSelectedGenre] = useState("indian");
  function onClickHandler(genre) {
    setSelectedGenre(genre);
  }
  return (
    <div className="App">
      <h1>
        🎵Awesome <span style={{ color: "green" }}>Music🎵</span>
      </h1>
      <small>
        Check my fav music, get started by selecting genre. Click the song if
        you want to listen to...🎧😃🎶🎵👂
      </small>
      <div>
        {Object.keys(musicDB).map((genre) => (
          <button
            className={genre === selectedGenre ? "selected" : ""}
            onClick={() => onClickHandler(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul>
          {musicDB[selectedGenre].map((music) => (
            <li>
              <div>
                <a href={music.link} target="_blank">
                  {music.name}
                </a>
              </div>
              <div>{music.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
