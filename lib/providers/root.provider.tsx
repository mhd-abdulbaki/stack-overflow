import { ProviderInteface } from "@/types/provider";
import { StoreProvider } from "./store/store.provider";
import { ThemeProvider } from "./theme/theme.provider";
import { AuthProvider } from "./auth/auth.provider";

import { ToastContainer } from "react-toastify";

export const RootProvider = ({ children }: ProviderInteface) => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
      <ToastContainer position="top-center" />
    </StoreProvider>
  );
};
