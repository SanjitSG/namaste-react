import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";
import { IMG_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resData, setResData] = useState(null);
  console.log(useState());
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log(MENU_API + resId);
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    setResData(json.data);
  };

  if (resData === null) return <Shimmer />;

  const { name, costForTwoMessage, avgRatingString, cuisines, id, cloudinaryImageId } =
    resData?.cards[2]?.card?.card?.info;

  const { itemCards } = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(itemCards);
  return (
    <div className="restaurant-menu">
      <div className="restaurant-card">
        <div>
          <img
            id="res-image"
            src={IMG_URL + cloudinaryImageId}
            alt={name}
          />
        </div>
        <div className="res-info">
          <h1>{name}</h1>
          <p>{costForTwoMessage}</p>
          <p>{avgRatingString}</p>
          <p>{cuisines.join(", ")}</p>
        </div>
      </div>

      <div className="res-item">
        {itemCards.map((item, index) => (
          <li
            className="item-li"
            key={index}
          >
            <div className="res-item-details">
              <h3>{item.card.info.name}</h3>
              <p className="item-header item-rating">
                {item.card.info.ratings.aggregatedRating.rating}
              </p>
              <p className="item-header item-description">{item.card.info.description}</p>
            </div>
            <div className="item-img">
              <img
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
