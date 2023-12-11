"use client";
// @Core
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

// @Third Party
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

// @Dev
// #Shared UI
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

//#Data Access
// ##Service
import { useSignInMutation } from "../data-access";

// @Utils
import { SignInSchema } from "../utils";

export const SignInModule = () => {
  const router = useRouter();
  //  @Async Call
  const [signInMutate, { isLoading }] = useSignInMutation();

  // #Inital Value
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // #OnSubmit Handler
  async function onSubmit(values: z.infer<typeof SignInSchema>) {
    try {
      await signInMutate(values).unwrap();
      toast.success("You are logged in", {
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
      });
      form.reset();
      router.push("/");
    } catch (error) {
      toast.error("Incorrect email or password", {
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
      });
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
              Sign in to your account
            </h1>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex w-full flex-col gap-4"
              >
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

                <div className="flex items-center justify-between">
                  <Link
                    href="#"
                    // eslint-disable-next-line tailwindcss/no-custom-classname
                    className="text-primary-600 text-sm font-medium hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Button
                  disabled={isLoading}
                  className="primary-gradient small-medium light-border-2   min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none"
                >
                  <span className="text-dark400_light900">Sign In</span>
                </Button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    href="/sign-up"
                    // eslint-disable-next-line tailwindcss/no-custom-classname
                    className="text-primary-600 font-medium hover:underline dark:text-primary-500"
                  >
                    Sign Up
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
