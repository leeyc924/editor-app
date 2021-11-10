import { ILoginReqData, ISignupReqData, ILoginResDeta } from 'models/account';

import { baseApi } from './baseApi';

const accountApi = baseApi.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<ILoginResDeta, ILoginReqData>({
      query: data => ({ url: '/account/login', method: 'POST', data }),
    }),
    signup: build.mutation<ILoginResDeta, ISignupReqData>({
      query: data => ({ url: '/account/signup', method: 'POST', data }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = accountApi;
