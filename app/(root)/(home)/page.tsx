import Link from "next/link";

//@dev
//#Ui
import { Button } from "@/components/ui/button";

// #Module
import {
  FilterModule,
  HomePageFilters,
  BadgeFilterModule,
} from "@/lib/modules/filter";
import { LocalSearchModule } from "@/lib/modules/search";

export default function HomePage() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient mx-4 min-h-[46px] py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchModule
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          othrerClasses="flex-1"
        />
        <FilterModule
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <BadgeFilterModule filters={HomePageFilters} />
    </>
  );
}
