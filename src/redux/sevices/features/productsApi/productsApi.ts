import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProducts } from '../../../../core/types'

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://195.49.210.12/api/' }),
	endpoints: build => ({
		getProducts: build.query<IProducts[], void>({
			query: () => `products/`
		})
	})
})


export const { useGetProductsQuery } = productsApi