import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wtpplData: [],
};

export const wtpplSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    fetchProjects: (state, action) => {
      state.wtpplData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchProjects } = wtpplSlice.actions;

export default wtpplSlice.reducer;
