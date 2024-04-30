import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerKey = useSelector((store) => store.movies?.trailerVideo);
  return (
    <div className="relative -z-10 w-[100%] -top-36 left-0 overflow-hidden border">
      <iframe
        className="max-w-full w-screen aspect-video"
        src={
          "https://www.youtube-nocookie.com/embed/" +
          trailerKey +
          "?vq=small&controls=1&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
