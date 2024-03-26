import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurantListData, setRestaurantListData] = useState(restaurantList);
  console.log(restaurantListData);
  return (
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
