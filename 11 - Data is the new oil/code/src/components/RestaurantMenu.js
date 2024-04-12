import { IMG_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);

  if (resData === null) return <Shimmer />;

  const { name, costForTwoMessage, avgRatingString, cuisines, id, cloudinaryImageId } =
    resData?.cards[2]?.card?.card?.info;

  const { itemCards } = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
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

      <div className="m-4 p-8 border flex flex-col items-center rounded-md">
        {itemCards.map((item, index) => (
          <li
            className="flex justify-between m-4 p-4 border shadow-md bg-orange-100 min-w-full max-h-60 overflow-hidden rounded-md"
            key={index}
          >
            <div className="p-4">
              <h3 className="text-lg font-medium">{item.card.info.name}</h3>
              <p className="item-header item-rating">
                {item.card.info.ratings.aggregatedRating.rating}
              </p>
              <p className="max-w-lg">{item.card.info.description}</p>
            </div>
            <div>
              <img
                className="w-48 h-48 object-cover"
                src={IMG_URL + item.card.info.imageId}
                alt={item.card.info.name}
              />
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
