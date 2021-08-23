import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from './api';

import { IAccount, ILogin } from 'models/api';

export const accountApi = createApi({
  reducerPath: 'auccountApi',
  baseQuery: baseQuery,
  endpoints: (build) => ({
    login: build.mutation<IAccount, ILogin>({
      query: (data) => ({ url: '/account/login', method: 'post', data }),
      invalidatesTags: (result) => [],
    }),
  }),
});

export const { useLoginMutation } = accountApi;

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