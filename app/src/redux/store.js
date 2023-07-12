import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./projectsSlice";
import contributorReducer from "./contributorSlice";
// import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    projects: projectReducer,
    contributors: contributorReducer,
    // users: userReducer,
  },
});
