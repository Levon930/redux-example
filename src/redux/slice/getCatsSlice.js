import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cats: [],
  status: "idle",
  error: null,
};

export const fetchCats = createAsyncThunk(
  "cats/fetchCats",
  async ({ id, page }) => {
    const response = await axios(
      `https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${id}`
    );
    return await response.data;
  }
);

const getCatsSlice = createSlice({
  name: "GET_CATS",
  initialState,
  reducers: {
    newId(state, action) {
      state.cats = [];
    },
  },
  extraReducers: {
    [fetchCats.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchCats.fulfilled]: (state, action) => {
      state.status = "succeeded";

      state.cats = state.cats.concat(action.payload);
    },
    [fetchCats.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});
export const selectCats = (state) => state.cats.cats;
export const { newId } = getCatsSlice.actions;
export default getCatsSlice.reducer;
