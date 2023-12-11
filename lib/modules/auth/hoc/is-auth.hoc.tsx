"use client";
import { useAppSelector } from "@/lib/store/hooks";
import { selectUserInfo } from "../data-access";

export function isAuthHoc(Component: any, control: boolean) {
  return function IsAuth(props: any) {
    const { token } = useAppSelector(selectUserInfo);

    if (token && control) return <Component {...props} />;

    if (!token && !control) return <Component {...props} />;

    return null;
  };
}
