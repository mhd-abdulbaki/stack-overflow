import { configureStore } from "@reduxjs/toolkit";
//@Reducers
//#Theme
import { themeSlice } from "../modules/navbar";
import { authSlice } from "../modules/auth/data-access";
import { apiSlice } from "./api/api.slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      theme: themeSlice,
      auth: authSlice,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
