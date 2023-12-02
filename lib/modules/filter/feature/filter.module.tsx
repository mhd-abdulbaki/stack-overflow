"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type filterType = { name: string; value: string };

interface PropsInteface {
  filters: filterType[];
  otherClasses?: string;
  containerClasses?: string;
}

export const FilterModule = ({
  filters,
  otherClasses,
  containerClasses,
}: PropsInteface) => {
  return (
    <div className={`relative ${containerClasses}`}>
      <Select>
        <SelectTrigger
          className={`${otherClasses} body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5`}
        >
          <div className="line-clamp-1 flex-1 text-left">
            <SelectValue placeholder="Theme" />
          </div>
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {filters.map((filter) => (
              <SelectItem key={filter.value} value={filter.value}>
                {filter.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export const BadgeFilterModule = ({ filters }: { filters: filterType[] }) => {
  const active = "newest";
  return (
    <div className={`mt-10 hidden flex-wrap gap-3 md:flex`}>
      {filters.map((filter) => (
        <Button
          key={filter.value}
          onClick={() => {}}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none dark:bg-dark-300 ${
            active === filter.value
              ? "bg-primary-100 text-primary-500"
              : "bg-light-800 text-light-500"
          }`}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};
