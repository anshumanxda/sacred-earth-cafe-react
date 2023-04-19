import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToOrder(state, { payload }) {
      state.orders = [...state.orders, ...payload];
    },
  },
});

export const { addToOrder } = orderSlice.actions;

export default orderSlice.reducer;
