import Link from "next/link";
import { MetricComponent, RenderTagComponent } from "@/lib/shared";
import { getTimestamp } from "@/lib/utils/time-stamp/time-stamp.utils";
import { formatAnDivideNumber } from "@/lib/utils/formatted-number/formatted-number.utils";

type tagsType = { _id: string; name: string };
type authorType = { _id: string; name: string; picture: string };

interface PropsInterface {
  _id: string;
  title: string;
  tags: tagsType[];
  author: authorType;
  upvotes: number;
  views: number;
  answers: Array<object>;
  createdAt: Date;
}

export const QuestionCardComponent = ({
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt,
}: PropsInterface) => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            {/* {getTimestamp(createdAt)} */}
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-2 flex-1">
              {title}
            </h3>
          </Link>
        </div>
        {/* If signed in add edit delete actions */}
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <RenderTagComponent key={tag._id} _id={tag._id} name={tag.name} />
        ))}
      </div>

      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <MetricComponent
          imgUrl="/assets/icons/avatar.svg"
          alt="user"
          value={author.name}
          title={` - asked ${getTimestamp(createdAt)}`}
          href={`/proflie/${author._id}`}
          isAuthor={true}
          textStyles="body-medium text-dark400_light700"
        />

        <MetricComponent
          imgUrl="/assets/icons/like.svg"
          alt="upvotes"
          value={formatAnDivideNumber(upvotes)}
          title="Votes"
          textStyles="small-medium text-dark400_light800"
        />

        <MetricComponent
          imgUrl="/assets/icons/message.svg"
          alt="message"
          value={formatAnDivideNumber(answers.length)}
          title="Answers"
          textStyles="small-medium text-dark400_light800"
        />

        <MetricComponent
          imgUrl="/assets/icons/eye.svg"
          alt="eye"
          value={formatAnDivideNumber(views)}
          title="Views"
          textStyles="small-medium text-dark400_light800"
        />
      </div>
    </div>
  );
};
