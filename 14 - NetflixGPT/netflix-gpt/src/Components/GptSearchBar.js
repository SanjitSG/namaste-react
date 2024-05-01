import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const gptSearchTxt = useRef(null);
  const handleGptSearchChick = async () => {
    console.log(gptSearchTxt.current.value);

    const searchQuery =
      "Act as movie recommendation system and suggest movies for the query: " +
      gptSearchTxt.current.value +
      ". only give me names of 5 movies, comma separated like the given result ahead. Example Result: Avatar, Sholay, Bahubali, Singham, Once upon a time in mumbai";
    const gptSearchResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptSearchResult.choices);
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
          onClick={handleGptSearchChick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
