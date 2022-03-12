const catsReducer = (state = {}, action) => {
  if (action.type === "get-cats") {
    return {
      ...state,
      cats: [...action.payload],
    };
  }
  return state;
};
export default catsReducer;
export const getCats = (data) => {
  return {
    type: "get-cats",
    payload: data,
  };
};
