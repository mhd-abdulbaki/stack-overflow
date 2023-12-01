import { RootState } from "@/lib/store/store";

export const selectMode = (state: RootState) => state.theme.mode;
