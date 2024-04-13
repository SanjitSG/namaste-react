import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constant";

const useSwiggyApi = () => {
  const [restaurantListData, setRestaurantListData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading state to true
      setError(null); // Clear any previous errors

      try {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        setRestaurantListData(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
      } catch (error) {
        setError(error); // Set error state if fetching fails
      } finally {
        setIsLoading(false); // Set loading state to false after fetching (success or failure)
      }
    };

    fetchData();
  }, []);

  return { restaurantListData, isLoading, error };
};

export default useSwiggyApi;
