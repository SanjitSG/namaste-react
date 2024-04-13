import { IMG_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);

  if (resData === null) return <Shimmer />;

  const { name, costForTwoMessage, avgRatingString, cuisines, id, cloudinaryImageId } =
    resData?.cards[2]?.card?.card?.info;

  const { itemCards } = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const categories = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="m-40">
      <div className="flex m-4 p-4 bg-orange-200 shadow-lg">
        <div>
          <img
            className="w-48 h-48"
            id="res-image"
            src={IMG_URL + cloudinaryImageId}
            alt={name}
          />
        </div>
        <div className="m-4 p-4">
          <h1 className="text-4xl font-bold py-2">{name}</h1>
          <p className="text-xl font-semibold">{costForTwoMessage}</p>
          <p className="text-lg font-semibold">{cuisines.join(", ")}</p>
          <p>{avgRatingString}</p>
        </div>
      </div>
      {categories.map((category) => {
        <RestaurantCategories data={category} />;
      })}
    </div>
  );
};

export default RestaurantMenu;
