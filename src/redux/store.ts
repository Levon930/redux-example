import { configureStore } from "@reduxjs/toolkit";
import { Interface } from "node:readline";
import categoryReducer from "./slice/getCatrgorySlice";
import catsReducer from "./slice/getCatsSlice";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    cats: catsReducer,
  },
});
export default store;
