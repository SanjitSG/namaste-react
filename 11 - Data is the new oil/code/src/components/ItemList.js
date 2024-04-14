import { IMG_URL } from "../utils/constant";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex text-left p-2 my-2 bg-slate-300 hover:bg-orange-300"
        >
          <div className="w-full p-4">
            <span className="text-xl font-semibold">{item.card.info.name}</span>
            <span className="block text-lg font-medium">
              ₹{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <p className="text-xs text-slate-500">{item.card.info.description}</p>
          </div>
          <div className="w-4/12">
            <button className="px-2 bg-green-200 rounded-sm absolute">Add</button>
            <img
              className="w-full h-full object-cover"
              src={IMG_URL + item.card.info.imageId}
              alt={item.card.info.name}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
