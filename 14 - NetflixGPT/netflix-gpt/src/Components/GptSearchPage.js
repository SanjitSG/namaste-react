import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10 w-screen h-screen bg-gradient-to-b from-black"></div>
      <div className="fixed -z-20">
        <img
          className="h-screen object-cover md:w-screen"
          src={BG_URL}
          alt="netflix-main-bg"
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;
