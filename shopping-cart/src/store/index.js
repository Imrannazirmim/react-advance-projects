import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui-slice.js";
import cartSlice from "./cart-slice.js";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartSlice.reducer
  },
});

export default store;
