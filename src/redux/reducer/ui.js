import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentTab: "special",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setCurrentTab(state, { payload }) {
      state.currentTab = payload;
    },
  },
});

export const { setCurrentTab } = uiSlice.actions;

export default uiSlice.reducer;
