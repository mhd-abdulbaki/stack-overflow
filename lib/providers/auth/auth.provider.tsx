"use client";
//@Core
import { ReactNode, useEffect } from "react";
// @Dev
//##DataAccess
import { useAppSelector } from "@/lib/store/hooks";
import {
  selectUserInfo,
  useRefreshTokenQuery,
} from "@/lib/modules/auth/data-access";
import { redirect, usePathname } from "next/navigation";

const protectedRoutes = [
  "/collection",
  "/community",
  "/profile",
  "/ask-question",
];

const ignoreRoutes = ["/sign-in", "/sign-up"];

export function AuthProvider({ children }: { children: ReactNode }) {
  const { token } = useAppSelector(selectUserInfo);
  const { refetch: refetchRefreshToken } = useRefreshTokenQuery();
  const pathname = usePathname();

  useEffect(() => {
    refetchRefreshToken();
    if (!token && protectedRoutes.includes(pathname)) {
      redirect("/sign-in");
    }
    if (token && ignoreRoutes.includes(pathname)) {
      redirect("/");
    }
  }, [refetchRefreshToken, pathname, token]);

  return <>{children}</>;
}
