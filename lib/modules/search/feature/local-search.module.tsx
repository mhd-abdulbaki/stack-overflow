"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";

interface PropsInterface {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  othrerClasses?: string;
}

export const LocalSearchModule = ({
  route,
  imgSrc,
  placeholder,
  iconPosition,
  othrerClasses,
}: PropsInterface) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${othrerClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="search icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}

      <Input
        type="text"
        placeholder={placeholder}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient text-dark400_light700 border-none shadow-none outline-none"
        onChange={() => {}}
      />

      {iconPosition === "rihgt" && (
        <Image
          src={imgSrc}
          alt="search icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};
