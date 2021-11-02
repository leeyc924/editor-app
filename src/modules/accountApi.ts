import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from './api';

import { ILogin, ILoginResDeta } from 'models/api';

export const accountApi = createApi({
  reducerPath: 'auccountApi',
  baseQuery: baseQuery,
  endpoints: (build) => ({
    login: build.mutation<ILoginResDeta, ILogin>({
      query: (data) => ({ url: '/account/login', data }),
    }),
  }),
});

export const { useLoginMutation } = accountApi;