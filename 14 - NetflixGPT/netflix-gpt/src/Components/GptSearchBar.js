import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[15%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-10"
          type="text"
          name="search"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="p-2 m-4 bg-red-600 rounded-lg text-white font-semibold col-span-2">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
