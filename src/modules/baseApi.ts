import { createApi, BaseQueryFn } from '@reduxjs/toolkit/query/react';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';

const developmentUrl = 'http://localhost:8005/editor';
const productionUrl = 'https://fass-editor-api.herokuapp.com/editor';

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
  ): BaseQueryFn<
    {
      url: string,
      method: AxiosRequestConfig['method'],
      data?: AxiosRequestConfig['data'],
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data }) => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      data.accessToken = accessToken;

      const response = await axios({
        url: baseUrl + url,
        method,
        data,
      });

      if (response) {
        if (response.status === 200) {
          return { data: response.data };
        } else {
          throw Object.assign(new Error('api error'), {
            status: response.status,
          });
        }
      } else {
        throw new Error('api error');
      }
    } catch (axiosError) {
      let err = axiosError as AxiosError;

      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };

const baseQuery = axiosBaseQuery({
  baseUrl: process.env.NODE_ENV !== 'production' ? developmentUrl : productionUrl,
});

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
