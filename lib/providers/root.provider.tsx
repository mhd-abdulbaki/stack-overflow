import { ProviderInteface } from "@/types/provider";
import { StoreProvider } from "./store/store.provider";
import { ThemeProvider } from "./theme/theme.provider";

export const RootProvider = ({ children }: ProviderInteface) => {
  return (
    <StoreProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </StoreProvider>
  );
};
