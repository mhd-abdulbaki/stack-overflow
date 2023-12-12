"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { useAppSelector } from "@/lib/store/hooks";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { selectUserInfo } from "../../auth/data-access";

export const UserAvatarModule = () => {
  const { userInfo } = useAppSelector(selectUserInfo);

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          <Avatar className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
            {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
            <AvatarFallback className="font-medium text-gray-600 dark:text-gray-300">
              {userInfo.name.split(" ")[0][0].toUpperCase() +
                userInfo.name.split(" ")[1][0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] top-1 mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300"></MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
