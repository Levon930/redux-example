import React, { createContext, useReducer } from "react";
const initialState = {
  dataCategories: [],
  catsData: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "GET_CATEGORY":
      return {
        ...state,
        dataCategories: action.payload,
      };
    case "GET_CATS":
      return {
        ...state,

        catsData: action.payload,
      };
    case "NEXT_CATS": {
      return {
        ...state,
        catsData: [...state.catsData, ...action.payload],
      };
    }

    default:
      return state;
  }
};
export const CurrentCatContext = createContext();

export const CurrentCatProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return (
    <CurrentCatContext.Provider value={value}>
      {children}
    </CurrentCatContext.Provider>
  );
};
