import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const { id, name, price } = payload;
      state.items = {
        ...state.items,
        [id]: {
          id,
          name,
          price,
          qty: state.items[id] ? state.items[id]?.qty + 1 : 1,
        },
      };
    },
    removeFromCart(state, { payload }) {
      const id = payload;
      const tempState = { ...state.items };
      if (state.items[id]) {
        if (state.items?.[id]?.qty === 1) {
          delete tempState[id];
        } else {
          tempState[id].qty = tempState[id].qty - 1;
        }
      }
      state.items = { ...tempState };
    },
    resetCart(state, { payload }) {
      state.items = {};
    },
  },
});

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
