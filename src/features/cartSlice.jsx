import { createSlice } from "@reduxjs/toolkit";
import jsonObjectArray from "../ProductData";

const initialState = {
  cart: [],
  items: jsonObjectArray,
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);

      if (find >= 0) {
        if (action.payload.quantity >= 0) {
          state.cart[find].quantity = action.payload.quantity;
        } else {
          state.cart.splice(find, 1);
        }
      } else {
        state.cart.push(action.payload);
      }

      state.totalQuantity = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = state.cart.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cart = state.cart.filter((item) => item.id !== itemId);

      state.totalQuantity = state.cart.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = state.cart.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
