"use client";
//@Core
import { useEffect, ReactNode } from "react";
// @Dev
//##DataAccess
import { selectMode, setModeRed } from "@/lib/modules/navbar";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const dispatch = useAppDispatch();
  const selectedMode = useAppSelector(selectMode);

  const toggleThemeHandler = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("prefers-color-scheme:dark").matches)
    ) {
      document.documentElement.classList.add("dark");
      dispatch(setModeRed({ mode: "dark" }));
    } else {
      dispatch(setModeRed({ mode: "light" }));
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    toggleThemeHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMode]);

  return <>{children}</>;
}
