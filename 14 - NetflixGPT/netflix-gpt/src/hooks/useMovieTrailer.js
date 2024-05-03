import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const movieTrailer = useSelector((store) => store.movies.trailerVideo);
  const dispatch = useDispatch();

  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();

    const filteredData = json.results.filter((video) => video.type === "Teaser");
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer.key));
  };

  useEffect(() => {
    !movieTrailer && getMovieVideo();
  }, []);
};

export default useMovieTrailer;
