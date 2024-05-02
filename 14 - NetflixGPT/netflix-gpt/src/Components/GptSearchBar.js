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
    <div className="pt-[15%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={gptSearchTxt}
          className="p-4 m-4 col-span-10"
          type="text"
          name="search"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="p-2 m-4 bg-red-600 rounded-lg text-white font-semibold col-span-2"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
