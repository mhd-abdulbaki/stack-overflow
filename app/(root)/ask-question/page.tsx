import { QuestionFormModule } from "@/lib/modules/ask-question";
// import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const AskQuestionPage = async () => {
  // const { userId } = auth();

  const userId = "9887655";
  if (!userId) redirect("/sign-in");

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
      <div className="mt-9">
        <QuestionFormModule userId={JSON.stringify(userId)} />
      </div>
    </div>
  );
};

export default AskQuestionPage;
