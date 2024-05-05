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
      <div className="flex justify-center items-center gap-2">
        <h1 className="text-white">powered by</h1>
        <img
          className="w-24 object-cover"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/344px-Google_Gemini_logo.svg.png"
          }
          alt="google-gemini"
        />
      </div>
    </>
  );
};

export default GptSearchPage;
