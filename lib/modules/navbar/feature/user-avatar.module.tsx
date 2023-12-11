"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import { selectMode, setModeRed } from "..";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { themesConstant } from "../utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type modeType = "light" | "dark" | "system";

export const UserAvatarModule = () => {
  const dispatch = useAppDispatch();

  const selectedMode = useAppSelector(selectMode);

  //@Regular Handler
  function toggleTheme(modeValue: modeType) {
    dispatch(setModeRed({ mode: modeValue }));

    if (modeValue !== "system") {
      localStorage.theme = modeValue;
    } else {
      localStorage.removeItem("theme");
    }
  }

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          <Avatar className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className="font-medium text-gray-600 dark:text-gray-300">
              CN
            </AvatarFallback>
          </Avatar>
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] top-1 mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300">
          {themesConstant.map((item) => (
            <MenubarItem
              className="flex items-center gap-4 px-2.5 py-2 dark:focus:bg-dark-400"
              key={item.label}
              onClick={() => toggleTheme(item.value as modeType)}
            >
              <Image
                src={item.icon}
                alt={item.value}
                width={16}
                height={16}
                className={`${selectedMode === item.value && "active-theme"}`}
              />
              <p
                className={`body-semibold text-light-500 ${
                  selectedMode === item.value
                    ? "text-primary-500"
                    : "text-dark100_light900"
                }`}
              >
                {item.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
