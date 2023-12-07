import * as z from "zod";

export const QuestionFormSchema = z.object({
  title: z
    .string()
    .min(5, { message: "must contain at least 5 character" })
    .max(130, { message: "must contain at most 130 character" }),
  explanation: z
    .string()
    .max(1000, { message: "must contain at most 100 character" }),
  tags: z
    .array(
      z
        .string()
        .min(1, { message: "must contain at least 1 character" })
        .max(15, { message: "must contain at most 15 character" })
    )
    .min(1)
    .max(3),
});
