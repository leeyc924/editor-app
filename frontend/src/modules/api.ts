import { createApi, BaseQueryFn } from '@reduxjs/toolkit/query/react';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';

const developmentUrl = 'http://localhost:8005/editor';
const productionUrl = ''; //todo product url 설정

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };

export const api = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: process.env.NODE_ENV !== 'production' ? developmentUrl : productionUrl,
  }),
  endpoints: (build) => ({
    login: build.mutation<any, any>({
      query: (data) => ({ url: '/account/login', method: 'post', data }),
    }),
  }),
});

export const { useLoginMutation } = api;