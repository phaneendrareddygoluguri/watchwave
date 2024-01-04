import React, { useEffect, useState } from "react";
import instance from "./Axios";
import requets from "./Request";
import './Banner.css'

const Banner = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requets.fetchNetFlixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  // console.log(movies, "mov");

  function truncate(str, n){
    return str?.length > n ? str.substr(0, n-1) + "..." : str
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movies?.backdrop_path}"
      )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movies?.name || movies?.original_name || movies?.title}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
          <h1 className="banner_description">{  truncate(movies?.overview, 150)}</h1>
          <div className="banner_fadeBottom"/>
        </div>
      </div>
    </header>
  );
};

export default Banner;
