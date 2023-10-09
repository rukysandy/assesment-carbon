import { configureStore } from "@reduxjs/toolkit";
import trendingReducer from "./features/trendingSlice";
export const store = configureStore({
  reducer: {
    trending: trendingReducer,
  },
});
