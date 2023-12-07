"use server";
import { revalidatePath } from "next/cache";

// @Dev
// #Model
import { Question } from "@/database/question/question.model";
import { User } from "@/database/user/user.model";
import { Tag } from "@/database/tag/tag.model";

import { connectToDatabase } from "../mongoose";

// #Shared
import { CreateQuesionParams, GetQuestionsParams } from "../shared.type";

export async function getQuestions(params: GetQuestionsParams) {
  try {
    connectToDatabase();
    const questions = await Question.find({})
      .populate({ path: "tags", model: Tag })
      .populate({ path: "author", model: User })
      .sort({ createdAt: -1 });

    return { questions };
  } catch (error) {
    return {
      state: "error",
      error,
    };
  }
}

export async function createQuestion(params: CreateQuesionParams) {
  try {
    connectToDatabase();

    const { title, content, tags, author, path } = params;

    //Create the question
    const question = await Question.create({
      title,
      content,
      author,
    });

    const tagDocuments = [];

    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { question: question._id } },
        { upsert: true, new: true }
      );

      tagDocuments.push(existingTag._id);
    }

    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });

    revalidatePath(path);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}
