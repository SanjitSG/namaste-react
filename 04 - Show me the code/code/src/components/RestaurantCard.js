import { IMG_URL } from "../constant";
const RestaurantCard = ({ name, cloudinaryImageId, cuisines, avgRating }) => {
  return (
    <div className="card">
      <img src={IMG_URL + cloudinaryImageId} alt="food-img" />
      <div className="description">
        <h2>{name}</h2>
        <p>{cuisines.join(" ")}</p>
        <p>{avgRating} stars</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
