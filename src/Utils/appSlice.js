import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isFormOpen: false,
  },
  reducers: {
    toogleForm: (state) => {
      state.isFormOpen = !state.isFormOpen;
    },
  },
});

export const { toogleForm } = appSlice.actions;
export default appSlice.reducer;