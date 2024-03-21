import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constant";

const Body = () => {
  const searchTxt = "kfc";
  return (
    <>
      <input type="text" className="search-box" placeholder="Search" value={searchTxt} onChange={(e) => console.log(e.target.value)} />
      <button className="search-btn">Search</button>
      <div className="restaurant">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />;
        })}
      </div>
    </>
  );
};
export default Body;
