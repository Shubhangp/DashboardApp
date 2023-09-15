import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import profileSlice from "./profileSlice";
import loginSlice from "./loginSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    profile: profileSlice,
    login: loginSlice,
  },
});

export default store;
