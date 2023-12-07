"use server";

import { User } from "@/database/user/user.model";
import { connectToDatabase } from "../mongoose";
import { Document } from "mongodb";
import {
  CreateUserParams,
  DeleteUserParams,
  UpdateUserParams,
} from "../shared.type";
import { revalidatePath } from "next/cache";
import { Question } from "@/database/question/question.model";

export async function getUserById(params: any) {
  try {
    connectToDatabase();

    const { userId } = params;

    const user = await User.findOne({ clerkId: userId });
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function createUser(userData: CreateUserParams) {
  try {
    connectToDatabase();

    const newUser = await User.create(userData);

    return newUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateUser(parmas: UpdateUserParams) {
  try {
    connectToDatabase();
    const { clerkId, path, updateData } = parmas;

    await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteUser(parmas: DeleteUserParams) {
  try {
    connectToDatabase();

    const { clerkId } = parmas;

    const user: Document = await User.findOneAndDelete({ clerkId });

    if (!user) {
      throw new Error("User not found");
    }

    // eslint-disable-next-line no-unused-vars
    const userQuestionIds = await Question.find({ author: user._id }).distinct(
      "_id"
    );
    // eslint-disable-next-line no-unused-vars
    await Question.deleteMany({ author: user._id });

    // TODO: delete user answers, comments, etc.
    // eslint-disable-next-line no-unused-vars
    const deletedUser = await User.findByIdAndDelete(user._id);

    return deletedUser;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
