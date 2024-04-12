import { Link } from "react-router-dom";
import { IMG_URL } from "../utils/constant";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating, id }) => {
  return (
    <Link
      to={"/restaurants/" + id}
      key={id}
    >
      <div className="m-2 p-4 bg-white w-60 rounded-xl min-h-96 flex flex-col items-center shadow-sm hover:scale-105">
        <img
          className="rounded-xl w-48 h-48"
          src={IMG_URL + cloudinaryImageId}
          alt="food-img"
        />
        <div className="mt-4 w-48 h-44 items-start">
          <h2 className="text-lg font-medium">{name}</h2>
          <p className="mt-4">{cuisines.join(" ")}</p>
          <p className="mt-4">{avgRating} stars</p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
