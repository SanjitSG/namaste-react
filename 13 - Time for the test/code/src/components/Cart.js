import React from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  //subscribe to card
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveItems = () => {
    dispatch(removeItem());
  };
  return (
    <div className="m-4 p-4 text-center">
      <h1 className="font-bold text-2xl">Cart</h1>

      {cartItems.length === 0 ? (
        <h1>Cart is Empty!!</h1>
      ) : (
        <button
          className="m-2 p-4 text-center font-bold text-2xl bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
      )}
      <ItemList
        items={cartItems}
        isInCart={true}
        handleRemoveItems={handleRemoveItems}
      />
    </div>
  );
};

export default Cart;
