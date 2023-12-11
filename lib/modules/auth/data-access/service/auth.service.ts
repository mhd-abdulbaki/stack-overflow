import { apiSlice } from "@/lib/store/api/api.slice";
import { ISignIn, ISignUp } from "./auth.interface";
import { setUserInfoRed } from "..";

export const authApiFun = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (body: ISignIn) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: body,
      }),

      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUserInfoRed({ token: data.data.token }));
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
        }
      },
    }),
    signUp: builder.mutation({
      query: (body: ISignUp) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: body,
      }),
    }),
    signOut: builder.query({
      query: () => ({ url: "/auth/sign-out" }),
    }),
    refreshToken: builder.query({
      query: () => ({ url: "/auth/refresh-token" }),
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(setUserInfoRed({ token: data.data.token }));
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
        }
      },
    }),
  }),
});

export const {
  useSignOutQuery,
  useSignInMutation,
  useSignUpMutation,
  useRefreshTokenQuery,
} = authApiFun;
