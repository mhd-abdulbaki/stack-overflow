import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUserInfo {
  token: string | null;
  avatar?: string | null;
}

const initialState: IUserInfo = {
  token: null,
  avatar: null,
};

const authSlice = createSlice({
  name: "auth-slice",
  initialState,
  reducers: {
    resetAuthSlice: () => initialState,
    setUserInfoRed: (state, action: PayloadAction<IUserInfo>) => {
      state.token = action.payload.token;
      state.avatar = action.payload.avatar;
    },
  },
});

export default authSlice.reducer;
export const { resetAuthSlice, setUserInfoRed } = authSlice.actions;
