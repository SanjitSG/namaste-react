import { Link } from "react-router-dom";
import { IMG_URL } from "../utils/constant";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating, id }) => {
  return (
    <Link
      to={"/restaurants/" + id}
      key={id}
    >
      <div className="m-2 p-4 bg-white w-60 rounded-xl max-h-96 flex flex-col items-center shadow-lg">
        <img
          className="rounded-xl w-48 h-48 object-cover"
          src={IMG_URL + cloudinaryImageId}
          alt="food-img"
        />
        <div className="mt-4 w-48 h-44 items-start">
          <h2 className="text-lg font-medium">{name}</h2>
          <p className="mt-4 text-xs from-neutral-300">{cuisines.join(" ")}</p>
          <p className="mt-4">{avgRating} stars</p>
        </div>
      </div>
    </Link>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute m-2 p-2 bottom-0 right-0">🟢</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
