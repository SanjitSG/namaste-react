import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, API_TOKEN } from "../utils/constants";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const gptSearchTxt = useRef(null);
  const dispatch = useDispatch();
  const genAI = new GoogleGenerativeAI(API_TOKEN);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    const searchQuery =
      "Act as movie recommendation system and suggest movies for the query: " +
      gptSearchTxt.current.value +
      ". only give me names of 5 movies, comma separated like the given result ahead. Example Result: Avatar, Sholay, Bahubali, Singham, Krish";

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(searchQuery);
    const response = await result.response;
    const text = response.text();

    if (!text) {
      //Todo :write error handling
    }

    const gptMovies = text.split(", ");

    // For each movie search TMDB API
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    //[Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
  };

  return (
    <div className="pt-[50%] md:pt-[15%] flex justify-center">
      <form
        className="w-screen md:w-1/2 drop-shadow-2xl flex flex-col items-center md:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={gptSearchTxt}
          className="py-2 pl-3 w-10/12 md:w-8/12 rounded-sm m-4 text-center"
          type="text"
          name="search"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="p-2 m-4 md:w-3/12 w-3/12 bg-red-600 rounded-sm text-white font-semibold "
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
