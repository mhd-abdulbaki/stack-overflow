"use client";
//@Core
import { ReactNode, useEffect } from "react";
// @Dev
//##DataAccess
import { useAppSelector } from "@/lib/store/hooks";
import { selectUserInfo } from "@/lib/modules/auth/data-access";

export function IsSignInProvider({
  children,
  control,
}: {
  children: ReactNode;
  control?: boolean;
}) {
  const { token } = useAppSelector(selectUserInfo);

  useEffect(() => {}, [token]);

  if (token && control) return <>{children}</>;

  if (!token && !control) return <>{children}</>;

  return null;
}
