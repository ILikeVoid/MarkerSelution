import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICategories } from '../../../../core/types'

export const categoriesApi = createApi({
	reducerPath: 'categoriesApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.100.24/api/' }),
	endpoints: build => ({
		getCategories: build.query<ICategories[], void>({ query: () => 'categories/' })
	})
})

export const { useGetCategoriesQuery } = categoriesApi
