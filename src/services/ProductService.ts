// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_ENDPOINT } from '../constants'
import type { Product } from '../models/Product'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${API_ENDPOINT}/products/` }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], string>({
      query: () => '/',
    }),
    getProductsByLimit: builder.query<Product[], number>({
      query: (limit) => {
        return `?limit=${limit}`
      },
    }),

  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery, useGetProductsByLimitQuery } = productsApi