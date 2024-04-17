import { configureStore } from "@reduxjs/toolkit";
import meowReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cart: meowReducer,
  },
});

export default appStore;
