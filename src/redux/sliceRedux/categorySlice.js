import axios from "axios";
const categoryReducer = (state = {}, action) => {
  if (action.type === "get-category") {
    return {
      ...state,
      category: [...action.payload],
    };
  }
  return state;
};
export default categoryReducer;
export const getCategory = (data) => {
  return {
    type: "get-category",
    payload: data,
  };
};
export const loadCategory = () => {
  return (dispatch, getState) => {
    return (async () => {
      const response = await axios("https://api.thecatapi.com/v1/categories");
      console.log(response, "response");
      await dispatch(getCategory(response.data));
    })();
  };
};
