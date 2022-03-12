import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import categoryReducer from "./sliceRedux/categorySlice";
import catsReducer from "./sliceRedux/catsSlice";

const store = createStore(
  combineReducers({ category: categoryReducer, cats: catsReducer }),
  {
    category: [],
    cats: [],
  },
  applyMiddleware(thunk)
);
export default store;
