import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '../API';
import { ILoginPayload } from '../interfaces';

export const authApi = createApi({
  reducerPath: 'authorization',
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<any, ILoginPayload>({
      query: (payload) => ({
        url: `/auth/sign_in`,
        method: 'POST',
        data: payload,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
