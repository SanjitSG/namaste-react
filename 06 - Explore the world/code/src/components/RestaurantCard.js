import { IMG_URL } from "../utils/constant";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating, sla }) => {
  return (
    <div className="card">
      <img
        src={IMG_URL + cloudinaryImageId}
        alt="food-img"
      />
      <div className="description">
        <h2>{name}</h2>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating} stars</p>
        <p>{sla.slaString}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
