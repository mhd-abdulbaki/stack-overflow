import { configureStore } from "@reduxjs/toolkit";
//@Reducers
//#Theme
import { themeSlice } from "../modules/navbar";

export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
