import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface themeState {
  mode: "dark" | "light" | "system";
}

const initialState = { mode: "dark" } as themeState;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setModeRed: (state, action: PayloadAction<themeState>) => {
      state.mode = action.payload.mode;
    },
  },
});

export const { setModeRed } = themeSlice.actions;
export default themeSlice.reducer;
