import { createAsyncThunk, createSlice, AsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
interface IcategoryTyps {
  id: number
  name: string
}
interface IstateTyps {
  category: IcategoryTyps[]
  status: string
  error: string
}
interface Istore {
  category: IstateTyps,
  cats: any

}
const initialState: IstateTyps = {
  category: [],
  status: "idle",
  error: '',
};

export const fetchCategory = createAsyncThunk<IstateTyps[], void, {}>("category/fetchCategory", async () => {
  const response = await axios.get<IstateTyps[]>("https://api.thecatapi.com/v1/categories");
  return await response.data;
});
const getCategorySlice = createSlice({
  name: "GET_CATEGORY",
  initialState,
  reducers: {},
  extraReducers: (builder) => {


    builder.addCase(fetchCategory.fulfilled, (state, action: any) => {
      state.category = state.category.concat(action.payload);
    })
    builder.addCase(fetchCategory.rejected, (state, action: any) => {
      if (action.payload) {
        // Since we passed in `MyKnownError` to `rejectValue` in `updateUser`, the type information will be available here.
        state.error = action.payload.errorMessage
      } else {
        state.error = action.error
      }
    })
  },
  /* extraReducers: {
    [fetchCategory.pending]: (state: IstateTyps, action) => {
      state.status = "loading";
    },
    [fetchCategory.fulfilled]: (state: IstateTyps, action) => {
      state.status = "succeeded";

      state.category = state.category.concat(action.payload);
    },
    [fetchCategory.rejected]: (state: IstateTyps, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  }, */
});

export const selectStatus = (state: Istore) => state.category.status;
export const selectCategory = (state: Istore) => state.category.category;
//export const { getCategoryCats } = getCategorySlice.actions;
export default getCategorySlice.reducer;
