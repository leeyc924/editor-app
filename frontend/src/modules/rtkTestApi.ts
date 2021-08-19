import { createApi } from '@reduxjs/toolkit/query'
import { request, gql, ClientError } from 'graphql-request'

const graphqlBaseQuery =
  ({ baseUrl }: any) =>
  async ({ body }: any) => {
    try {
      const result = await request(baseUrl, body)
      return { data: result }
    } catch (error) {
      if (error instanceof ClientError) {
        return { error: { status: error.response.status, data: error } }
      }
      return { error: { status: 500, data: error } }
    }
  }

export const api = createApi({
  baseQuery: graphqlBaseQuery({
    baseUrl: 'https://graphqlzero.almansi.me/api',
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        body: gql`
          query {
            posts {
              data {
                id
                title
              }
            }
          }
        `,
      }),
      transformResponse: (response) => response.posts.data,
    }),
    getPost: builder.query({
      query: (id) => ({
        body: gql`
        query {
          post(id: ${id}) {
            id
            title
            body
          }
        }
        `,
      }),
      transformResponse: (response) => response.post,
    }),
  }),
})