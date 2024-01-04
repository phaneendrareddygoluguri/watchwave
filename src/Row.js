import React, { useEffect, useState } from "react";
import instance from "./Axios";
import './Row.css'
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars:{
      autoplay : 1
    }
  }
  const handleClick = (movie) => {
  if(trailerUrl){
    setTrailerUrl('')
  }else{
    movieTrailer(movie?.name || "")
    .then((url) => {
     const urlParams = new URLSearchParams(new URL(url).search);
    setTrailerUrl(urlParams.get('v'))
    }).catch(error => console.log(error)) 
   }
  }

 
  //    const url ='https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=f09c285846c722fd61502d2512e6afa9'
  // const handleClick = (movie) => {
  //   if (trailerUrl) {
  //     setTrailerUrl('');
  //   } else {
  //     movieTrailer(movie?.name || "")
  //       .then((url) => {
  //         if (url) {
  //           try {
  //             const urlObject = new URL(url);
  //             const urlParams = new URLSearchParams(urlObject.search);
  //             setTrailerUrl(urlParams.get('v'));
  //           } catch (error) {
  //             console.log("Invalid URL:", error);
  //           }
  //         } else {
  //           console.log("No movie found with the search query:", movie?.name);
  //           // You can provide a message to the user here.
  //         }
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // };
  //  console.log(trailerUrl,"trailerUrl");
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies?.map((movie) => (
          <img
          onClick={()=>handleClick(movie)}
          key={movie.id}
            className={`row_poster ${isLargeRow &&  "row_posterLarge"}`}
            src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt=""
          />
        ))}
      </div>
  {trailerUrl && 
  <YouTube videoId={trailerUrl} opts={opts} />
  }
    </div>
  );
};

export default Row;
