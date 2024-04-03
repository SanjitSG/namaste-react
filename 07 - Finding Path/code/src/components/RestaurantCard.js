import { Link } from "react-router-dom";
import { IMG_URL } from "../utils/constant";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating, id }) => {
  return (
    <Link
      to={"/restaurants/" + id}
      key={id}
    >
      <div className="card">
        <img
          src={IMG_URL + cloudinaryImageId}
          alt="food-img"
        />
        <div className="description">
          <h2>{name}</h2>
          <p>{cuisines.join(" ")}</p>
          <p>{avgRating} stars</p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
