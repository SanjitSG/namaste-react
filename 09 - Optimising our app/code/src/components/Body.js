// import RestaurantCard from "./RestaurantCard";
// import { useEffect, useState } from "react";
// import { SWIGGY_API } from "../utils/constant";
// import Shimmer from "./Shimmer";

// const Body = () => {
//   const [restaurantListData, setRestaurantListData] = useState([]);
//   const [filteredRestaurant, setFilteredRestaurant] = useState([]);
//   const [searchTxt, setSearchTxt] = useState("");

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(SWIGGY_API);
//     const json = await data.json();
//     setRestaurantListData(
//       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );

//     setFilteredRestaurant(
//       json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//   };

//   return restaurantListData.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <>
//       <div className="filter">
//         <input
//           type="text"
//           name="search-box"
//           className="search-box"
//           value={searchTxt}
//           onChange={(e) => {
//             setSearchTxt(e.target.value);
//           }}
//         />
//         <button
//           id="search-btn"
//           onClick={() => {
//             const filteredSearch = restaurantListData.filter((res) => {
//               return res.info.name.toLowerCase().includes(searchTxt.toLowerCase());
//             });
//             121;

//             setFilteredRestaurant(filteredSearch);
//           }}
//         >
//           Search
//         </button>
//         <button
//           className="filter-btn"
//           onClick={() => {
//             let filteredData = restaurantListData.filter((res) => res.info.avgRating > 4.3);
//             setRestaurantListData(filteredData);
//           }}
//         >
//           Top Rated Restaurant
//         </button>
//       </div>
//       <div className="restaurant">
//         {filteredRestaurant.map((restaurant) => {
//           return (
//             <RestaurantCard
//               {...restaurant.info}
//               key={restaurant.info.id}
//             />
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default Body;

import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import useSwiggyApi from "../utils/useSwiggyApi";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");

  const { restaurantListData, isLoading, error } = useSwiggyApi();

  // Handle errors, if any:
  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  const filteredRestaurants = isLoading
    ? []
    : restaurantListData.filter((restaurant) => {
        // Combine search and rating filters (adjust logic as needed)
        const nameMatch = restaurant.info.name.toLowerCase().includes(searchTxt.toLowerCase());
        const ratingMatch = restaurant.info.avgRating > 4.5; // Adjust rating threshold
        return nameMatch || ratingMatch; // Include restaurants if either filter matches
      });

  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="filter">
        <input
          type="text"
          name="search-box"
          className="search-box"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)} // Update search term
        />
        <button
          id="search-btn"
          onClick={() => {
            // No need to update state here, filtering happens automatically
          }} // Filtering handled in filteredRestaurants variable
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            // No need to update state here, filtering happens automatically
          }} // Filtering handled in filteredRestaurants variable
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            {...restaurant.info}
            key={restaurant.info.id}
          />
        ))}
      </div>
    </>
  );
};

export default Body;
