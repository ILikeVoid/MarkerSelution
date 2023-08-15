import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICategories, IParent } from '../../../../core/types'

export const categoriesApi = createApi({
	reducerPath: 'categoriesApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.100.24/api/' }),
	endpoints: build => ({
		getParent: build.query<IParent[], void>({
			query: () => 'api/parent-categories/'
		}),
		getParentChildren: build.query<ICategories[], number>({
			query: (childrenId) => `/category/${childrenId}/children/`
		})
	})
})

export const { useGetParentQuery, useGetParentChildrenQuery } = categoriesApi
