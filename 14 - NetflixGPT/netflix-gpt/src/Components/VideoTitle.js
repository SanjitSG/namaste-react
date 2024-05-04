import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute aspect-video pt-0 md:pt-[10%] px-10 md:px-24 text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl sm:text-6xl font-bold w-9/12 py-4 md:py-6">{title}</h1>
      <p className="hidden md:block py-6 text-lg w-1/3">{overview}</p>
      <div>
        <button className="  text-xl md:text-3xl font-semibold px-3 py-1 md:py-2 rounded-lg text-black bg-white hover:bg-opacity-90">
          &#9654; Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 bg-opacity-50 font-semibold opacity-70 text-3xl px-6 py-2 rounded-lg mx-2 hover:bg-opacity-25 ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
