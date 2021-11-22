import axios from 'axios';
import { ILoginReqData, ISignupReqData, ILoginResDeta, IConfirmTokenReqData } from 'models/account';

import { baseApi } from './baseApi';

export const accountApi = baseApi.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<ILoginResDeta, ILoginReqData>({
      query: data => ({ url: '/account/login', method: 'POST', data }),
      transformResponse: (response: ILoginResDeta) => {
        localStorage.setItem('accessToken', response.accessToken);
        axios.defaults.headers.common['authorization'] = response.accessToken;
        return response;
      },
    }),
    signup: build.mutation<ILoginResDeta, ISignupReqData>({
      query: data => ({ url: '/account/signup', method: 'POST', data }),
      transformResponse: (response: ILoginResDeta) => {
        localStorage.setItem('accessToken', response.accessToken);
        axios.defaults.headers.common['authorization'] = response.accessToken;
        return response;
      },
    }),
    confirmToken: build.mutation<ILoginResDeta, IConfirmTokenReqData>({
      query: data => ({ url: '/account/confirm-token', method: 'POST', data }),
      transformResponse: (response: ILoginResDeta) => {
        localStorage.setItem('accessToken', response.accessToken);
        axios.defaults.headers.common['authorization'] = response.accessToken;
        return response;
      },
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useConfirmTokenMutation } = accountApi;