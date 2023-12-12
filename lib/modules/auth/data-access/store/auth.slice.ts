import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUserInfo {
  token: string | null;
  userInfo: {
    id: string;
    name: string;
    username: string;
    roles: string;
  };
}

const initialState: IUserInfo = {
  token: null,
  userInfo: {
    id: "",
    name: "",
    username: "",
    roles: "string",
  },
};

const authSlice = createSlice({
  name: "auth-slice",
  initialState,
  reducers: {
    resetAuthSlice: () => initialState,
    setUserInfoRed: (state, action: PayloadAction<IUserInfo>) => {
      state.token = action.payload.token;
      state.userInfo = action.payload.userInfo;
    },
  },
});

export default authSlice.reducer;
export const { resetAuthSlice, setUserInfoRed } = authSlice.actions;
