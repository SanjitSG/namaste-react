import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <img
        className="absolute w-ful -z-10"
        src={BG_URL}
        alt="netflix-main-bg"
      />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
