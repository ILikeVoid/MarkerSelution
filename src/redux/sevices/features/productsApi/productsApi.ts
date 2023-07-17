import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProducts } from '../../../../core/types'

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({ baseUrl: '' }),
	endpoints: build => ({
		getProducts: build.query<IProducts[], void>({
			query: () => `qwdqwd`
		})
	})
})


export const { useGetProductsQuery } = productsApi