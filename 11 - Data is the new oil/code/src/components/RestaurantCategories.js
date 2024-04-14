import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategories = ({ data, showItem, setShowIndex }) => {
  console.log(setShowIndex);
  // const handleShowItems = () => {
  //   setShowIndex();
  // };
  return (
    <div className=" border w-6/12 mx-auto text-center my-3 p-4 border-b-4 hover:border-blue-600">
      <div
        className="flex justify-between cursor-pointer"
        onClick={setShowIndex}
      >
        <span className="text-xl font-bold">
          {data?.title} ({data?.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      {showItem && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategories;
