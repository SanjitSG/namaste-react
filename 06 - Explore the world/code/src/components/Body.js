import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constant";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantListData, setRestaurantListData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);

    const json = await data.json();

    setRestaurantListData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restaurantListData.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filteredData = restaurantListData.filter((res) => res.info.avgRating > 4.3);
            setRestaurantListData(filteredData);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant">
        {restaurantListData.map((restaurant) => {
          return (
            <RestaurantCard
              {...restaurant.info}
              key={restaurant.info.id}
            />
          );
        })}
      </div>
    </>
  );
};
export default Body;
