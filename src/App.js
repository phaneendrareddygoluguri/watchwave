import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./Request";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Trending Now" fetchUrl={requests.trendingNow} isLargeRow />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetFlixOriginals}
      />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      {/* <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/> */}
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      {/* <Row title="Horror Movies" fetchUrl={requests.fetchHorrormovies}/> */}
      <Row title="Love Movies" fetchUrl={requests.fetchLovemovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
