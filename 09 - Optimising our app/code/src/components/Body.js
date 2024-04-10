import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import useSwiggyApi from "../utils/useSwiggyApi";

const Body = () => {
  const { restaurantListData, isLoading, error } = useSwiggyApi();
  const [searchTxt, setSearchTxt] = useState("");
  const [filteredData, setFilteredData] = useState([]); // Define state for filtered data

  const handleSearch = () => {
    const filteredResults = restaurantListData.filter((res) => {
      return res.info.name.toLowerCase().includes(searchTxt.toLowerCase());
    });
    setFilteredData(filteredResults); // Update filteredData state with search results
  };

  const handleTopRated = () => {
    const filteredResults = restaurantListData.filter((res) => res.info.avgRating > 4);
    console.log(filteredResults);
    setFilteredData(filteredResults); // Update filteredData state with top-rated restaurants
  };

  return (
    <>
      {isLoading ? (
        <Shimmer />
      ) : error ? (
        <div>Error fetching data: {error.message}</div>
      ) : (
        <>
          <div className="filter">
            <input
              type="text"
              name="search-box"
              className="search-box"
              value={searchTxt}
              onChange={(e) => setSearchTxt(e.target.value)}
            />
            <button
              id="search-btn"
              onClick={handleSearch}
            >
              Search
            </button>
            <button
              className="filter-btn"
              onClick={handleTopRated}
            >
              Top Rated Restaurant
            </button>
          </div>
          <div className="restaurant">
            {searchTxt.length > 0 && filteredData.length > 0 ? (
              filteredData.map((restaurant) => (
                <RestaurantCard
                  {...restaurant.info}
                  key={restaurant.info.id}
                />
              ))
            ) : restaurantListData.length === 0 ? (
              <p>No restaurants found.</p>
            ) : (
              restaurantListData.map((restaurant) => (
                <RestaurantCard
                  {...restaurant.info}
                  key={restaurant.info.id}
                />
              ))
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Body;
