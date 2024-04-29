import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold w-1/2">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-slate-50 text-3xl font-semibold px-8 py-4 rounded-lg mx-2">
          &#9654; Play
        </button>
        <button className="bg-slate-200 text-white font-semibold opacity-70 text-3xl px-8 py-4 rounded-lg mx-2">
          &#x21; More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
