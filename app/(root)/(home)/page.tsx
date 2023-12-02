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
import { NoResultComponent } from "@/lib/shared";
import { QuestionCardComponent } from "@/lib/modules/home";

const questions = [
  {
    _id: "1",
    title:
      "The Lightning Component c:LWC_PizzaTracker generated invalid output for field status. Error How to solve this",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    author: { _id: "1", name: "John Deo", picture: "" },
    upvotes: 1500000,
    views: 50000,
    answers: [{}],
    createdAt: new Date("2021-09-01T00:00:00.000Z"),
  },
  {
    _id: "2",
    title:
      "An HTML table where specific cells come from values in a Google Sheet identified by their neighboring cell",
    tags: [
      { _id: "1", name: "react" },
      { _id: "2", name: "javascript" },
    ],
    author: { _id: "34", name: "John Smith", picture: "" },
    upvotes: 12,
    views: 44,
    answers: [{}],
    createdAt: new Date("2023-11-02T09:00:00.000Z"),
  },
];

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

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions?.map((question) => (
            <QuestionCardComponent
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResultComponent
            title="There&rsquo;s no question to show"
            description="  Be the first to break the silence! 🚀 Ask a Question and kickstart the
          discussion. our query could be the next big thing others learn from. Get
          involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
