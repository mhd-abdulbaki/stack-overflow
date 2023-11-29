"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface ThemeContextInterface {
  mode: string;
  setMode: (mode: string) => void;
}

const ThemeContext = createContext<ThemeContextInterface | undefined>(
  undefined
);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState("");

  const handlerThemeChange = () => {
    if (mode === "dark") {
      setMode("light");
      document.documentElement.classList.add("light");
    } else {
      setMode("dark");
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    handlerThemeChange();
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a Theme Provider");
  }

  return context;
}
