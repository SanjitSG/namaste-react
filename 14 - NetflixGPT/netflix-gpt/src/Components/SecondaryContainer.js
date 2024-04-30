import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  return (
    <div className="bg-black">
      <div className="relative -mt-80 z-10 pl-12">
        <MovieList
          title={"Now Playing"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          title={"Upcoming"}
          movies={movies.upcomingMovies}
        />
        <MovieList
          title={"Popular"}
          movies={movies.popularMovies}
        />
        <MovieList
          title={"Trending"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList
          title={"Horror"}
          movies={movies.nowPlayingMovies}
        />
      </div>
    </div>
  );
};

export default SecondaryContainer;
