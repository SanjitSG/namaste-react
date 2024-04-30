import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute aspect-video pt-[18%] px-24 text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold w-1/2">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div>
        <button className="bg-slate-50 text-3xl font-semibold px-6 py-2 rounded-lg text-black hover:bg-opacity-90">
          &#9654; Play
        </button>
        <button className=" bg-gray-500 bg-opacity-50 font-semibold opacity-70 text-3xl px-6 py-2 rounded-lg mx-2 hover:bg-opacity-25">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
