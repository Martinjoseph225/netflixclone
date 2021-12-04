import "./Banner.css";
import { API_KEY, imageUrl } from "../../../constants/constants";
import React, { useEffect, useState } from "react";
import axios from "../../../axios";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        const x = Math.floor(Math.random() * 20 + 1);
        console.log(response.data.results[x]);
        setMovie(response.data.results[x]);
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">
          {movie ? (movie.name ? movie.name : movie.title) : ""}
        </h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="descrption">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
