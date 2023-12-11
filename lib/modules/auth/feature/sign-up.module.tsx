"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SignUpSchema } from "../utils";
import Link from "next/link";

export const SignUoModule = () => {
  // #Inital Value
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // #OnSubmit Handler
  async function onSubmit(values: z.infer<typeof SignUpSchema>) {
    try {
      console.log(values);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
        <Link href={"/"} className="mb-8 flex items-center gap-1">
          <Image
            src={"/assets/images/site-logo.svg"}
            width={32}
            height={32}
            alt="DevFlow"
          />
          <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
            3rab <span className="text-primary-500">Overflow</span>
          </p>
        </Link>
        <div className="w-full rounded-lg bg-white shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Create your account
            </h1>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex w-full flex-col gap-4"
              >
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormLabel className=" text-dark400_light800">
                        Full Name
                        <span className="text-primary-500">*</span>
                      </FormLabel>
                      <FormControl className="mt-3.5">
                        <Input
                          className="no-focus paragraph-regular background-light800_dark300 light-border-2 text-dark300_light700 min-h-[48px] border"
                          {...field}
                          placeholder="Full Name"
                          type="text"
                        />
                      </FormControl>

                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormLabel className="paragraph-semibold text-dark400_light800">
                        Your email
                        <span className="text-primary-500">*</span>
                      </FormLabel>
                      <FormControl className="mt-3.5">
                        <Input
                          className="no-focus paragraph-regular background-light800_dark300 light-border-2 text-dark300_light700 min-h-[48px] border"
                          {...field}
                          placeholder="Email"
                          type="email"
                        />
                      </FormControl>

                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormLabel className="paragraph-semibold text-dark400_light800">
                        Your password
                        <span className="text-primary-500">*</span>
                      </FormLabel>
                      <FormControl className="mt-3.5">
                        <Input
                          className="no-focus paragraph-regular background-light800_dark300 light-border-2 text-dark300_light700 min-h-[48px] border"
                          {...field}
                          placeholder="Password"
                          type="password"
                        />
                      </FormControl>

                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem className="flex w-full flex-col">
                      <FormLabel className="paragraph-semibold text-dark400_light800">
                        Confirm Password
                        <span className="text-primary-500">*</span>
                      </FormLabel>
                      <FormControl className="mt-3.5">
                        <Input
                          className="no-focus paragraph-regular background-light800_dark300 light-border-2 text-dark300_light700 min-h-[48px] border"
                          {...field}
                          placeholder="  Confirm Password"
                          type="password"
                        />
                      </FormControl>

                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />

                <Button className="primary-gradient small-medium light-border-2   min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  <span className="text-dark400_light900 ">Sign Up</span>
                </Button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Have an account?{" "}
                  <Link
                    href="/sign-in"
                    // eslint-disable-next-line tailwindcss/no-custom-classname
                    className="text-primary-600 font-medium hover:underline dark:text-primary-500"
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};
