import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constant";
import Shimmer from "./Shimmer";

const Body = () => {
  console.log("body rendered");

  const [restaurantListData, setRestaurantListData] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);

    const json = await data.json();

    setRestaurantListData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restaurantListData.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="filter">
        <input
          type="text"
          name="search-box"
          className="search-box"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          id="search-btn"
          onClick={() => {
            const filteredSearch = restaurantListData.filter((res) => {
              return res.info.name.toLowerCase().includes(searchTxt.toLowerCase());
            });

            setFilteredRestaurant(filteredSearch);
          }}
        >
          Search
        </button>
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
        {filteredRestaurant.map((restaurant) => {
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
