import { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';

const developmentUrl = 'http://localhost:8005/editor';
const productionUrl = 'https://fass-editor-api.herokuapp.com/editor';

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
  ): BaseQueryFn<
    {
      url: string;
      data?: AxiosRequestConfig['data'];
      method: 'post' | 'get' | 'petch' | 'delete';
    },
    unknown,
    unknown
  > =>
  async ({ url, data, method }) => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      data.accessToken = accessToken;

      const response = await axios({
        method: 'post',
        url: baseUrl + url,
        data,
      })

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

export const baseQuery = axiosBaseQuery({
  baseUrl: process.env.NODE_ENV !== 'production' ? developmentUrl : productionUrl,
});

// export const fetchEditorApi = async (url: string, data: any, options:any = {}) => {
//   try {
//     const accessToken = localStorage.getItem('accessToken');

//     data = produce(data, (draft: any) => {
//       draft.accessToken = accessToken;
//     });

//     let apiUrl = '';
//     if (process.env.NODE_ENV !== 'production') {
//       apiUrl = developmentUrl;
//     } else {
//       apiUrl = productionUrl;
//     }

//     const response = await axios({
//       method: 'post',
//       url: apiUrl + url,
//       headers: {
//         // 'X-Api-Key': '',
//         'content-type': 'application/json',
//         ...options.headers,
//       },
//       data: data,
//     }).catch(err => {
//       if (err.response.status === 401) {
//         window.location.href = '/auth/login';
//       } else {
//         throw err;
//       }
//     });

//     if (response) {
//       if (response.status === 200) {
//         return response.data;
//       } else {
//         throw Object.assign(new Error('api error'), {
//           status: response.status,
//         });
//       }
//     } else {
//       throw new Error('api error');
//     }
//   } catch (err) {
//     throw err;
//   }
// };