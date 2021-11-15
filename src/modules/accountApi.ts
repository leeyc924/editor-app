import axios from 'axios';
import { ILoginReqData, ISignupReqData, ILoginResDeta, IConfirmTokenReqData } from 'models/account';

import { baseApi } from './baseApi';

export const accountApi = baseApi.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<ILoginResDeta, ILoginReqData>({
      query: data => ({ url: '/account/login', method: 'POST', data }),
      transformResponse: (response: { data: ILoginResDeta }) => {
        const data = response.data;

        localStorage.setItem('accessToken', data.accessToken);
        axios.defaults.headers.common['authorization'] = data.accessToken;
        return response.data;
      },
    }),
    signup: build.mutation<ILoginResDeta, ISignupReqData>({
      query: data => ({ url: '/account/signup', method: 'POST', data }),
      transformResponse: (response: { data: ILoginResDeta }) => {
        const data = response.data;

        localStorage.setItem('accessToken', data.accessToken);
        axios.defaults.headers.common['authorization'] = data.accessToken;
        return response.data;
      },
    }),
    confirmToken: build.mutation<ILoginResDeta, IConfirmTokenReqData>({
      query: data => ({ url: '/account/signup', method: 'POST', data }),
      transformResponse: (response: { data: ILoginResDeta }) => {
        const data = response.data;

        localStorage.setItem('accessToken', data.accessToken);
        axios.defaults.headers.common['authorization'] = data.accessToken;
        return response.data;
      },
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useConfirmTokenMutation } = accountApi;