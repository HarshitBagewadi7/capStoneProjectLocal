import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contributorsData: [],
};

export const contributorsSlice = createSlice({
  name: "contributors",
  initialState,
  reducers: {
    fetchContributors: (state, action) => {
      state.contributorsData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchContributors } = contributorsSlice.actions;

export default contributorsSlice.reducer;
