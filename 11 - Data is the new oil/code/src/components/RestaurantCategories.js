import ItemList from "./ItemList";

const RestaurantCategories = ({ data }) => {
  return (
    <div className=" border w-6/12 mx-auto text-center my-3 p-4 border-b-4 hover:border-blue-600">
      <div className="flex justify-between">
        <span className="text-xl font-bold">
          {data?.title} ({data?.itemCards.length})
        </span>
        <span>🔽</span>
      </div>
      <ItemList items={data.itemCards} />;
    </div>
  );
};

export default RestaurantCategories;
