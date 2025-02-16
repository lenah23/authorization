import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '../API';
import { IIndustryPayload, ILoginPayload } from '../interfaces';

export const industryApi = createApi({
  reducerPath: 'industry',
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
  }),
  endpoints: (builder) => ({
    saveIndustries: builder.mutation<any, IIndustryPayload>({
      query: (payload) => ({
        url: `/onboarding/startup/fourth_step`,
        method: 'POST',
        data: payload,
      }),
    }),
  }),
});

export const { useSaveIndustriesMutation } = industryApi;
