import { QuestionFormModule } from "@/lib/modules/ask-question";

const AskQuestionPage = async () => {
  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
      <div className="mt-9">
        <QuestionFormModule />
      </div>
    </div>
  );
};

export default AskQuestionPage;
