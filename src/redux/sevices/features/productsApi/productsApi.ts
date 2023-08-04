import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProducts } from '../../../../core/types'

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.100.24/api/' }),
	endpoints: build => ({
		getProduct: build.query<IProducts, number>({
			query: (productId) => `products/${productId}`
		})
	})
})


export const { useGetProductQuery } = productsApi