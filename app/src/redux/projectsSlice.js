import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectsData: [],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    fetchProjects: (state, action) => {
      state.projectsData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
