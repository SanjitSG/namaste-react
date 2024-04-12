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
        <div>
          <div className="m-4">
            <input
              type="text"
              name="search-box"
              className="shadow-lg border"
              value={searchTxt}
              onChange={(e) => setSearchTxt(e.target.value)}
            />
            <button
              className="m-2 px-2 py-1 bg-blue-200 rounded-md"
              id="search-btn"
              onClick={handleSearch}
            >
              Search
            </button>
            <button
              className="m-2 px-2 py-1 bg-green-200 rounded-md"
              onClick={handleTopRated}
            >
              Top Rated Restaurant
            </button>
          </div>
          <div className="flex m-4 p-4 flex-wrap justify-evenly bg-orange-100 shadow-sm rounded-lg">
            {filteredData.length > 0 ? (
              filteredData.map((restaurant) => (
                <RestaurantCard
                  {...restaurant.info}
                  key={restaurant.info.id}
                />
              ))
            ) : searchTxt.length == 0 ? (
              restaurantListData.map((restaurant) => (
                <RestaurantCard
                  {...restaurant.info}
                  key={restaurant.info.id}
                />
              ))
            ) : (
              <p>No res found</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
