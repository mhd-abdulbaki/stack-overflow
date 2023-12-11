/* eslint-disable prefer-regex-literals */
import * as z from "zod";

export const SignInSchema = z.object({
  email: z.string().email(),

  password: z
    .string()
    .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
    .regex(new RegExp(".*[a-z].*"), "One lowercase character")
    .regex(new RegExp(".*\\d.*"), "One number")
    .regex(
      new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
      "One special character"
    )
    .min(8, { message: "must contain at least 8 character" })
    .max(1000, { message: "must contain at most 100 character" }),
});

export const SignUpSchema = z
  .object({
    fullName: z
      .string()
      .min(4, { message: "must contain at least 4 character" })
      .max(1000, { message: "must contain at most 100 character" }),
    email: z.string().email(),

    password: z
      .string()
      .regex(new RegExp(".*[A-Z].*"), "One uppercase character")
      .regex(new RegExp(".*[a-z].*"), "One lowercase character")
      .regex(new RegExp(".*\\d.*"), "One number")
      .regex(
        new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
        "One special character"
      )
      .min(8, { message: "must contain at least 8 character" })
      .max(1000, { message: "must contain at most 100 character" }),

    confirmPassword: z
      .string()
      .min(8, { message: "must contain at least 8 character" })
      .max(1000, { message: "must contain at most 100 character" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
