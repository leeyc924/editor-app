import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from './api';

import { ILoginReqData, ISignupReqData, ILoginResDeta } from 'models/account';

export const accountApi = createApi({
  reducerPath: 'auccountApi',
  baseQuery: baseQuery,
  endpoints: (build) => ({
    login: build.mutation<ILoginResDeta, ILoginReqData>({
      query: (data) => ({ url: '/account/login', data, method: 'post' }),
    }),
    signup: build.mutation<ILoginResDeta, ISignupReqData>({
      query: (data) => ({ url: '/account/signup', data, method: 'post' }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = accountApi;
