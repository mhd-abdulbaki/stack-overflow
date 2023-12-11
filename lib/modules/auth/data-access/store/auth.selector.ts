import { RootState } from "@/lib/store/store";

export const selectUserInfo = (state: RootState) => {
  return {
    token: state.auth.token,
    avatar: state.auth.avatar,
  };
};
