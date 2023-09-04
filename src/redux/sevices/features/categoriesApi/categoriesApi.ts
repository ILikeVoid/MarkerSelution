import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ICategories, ICategoryProducts, IParent, IProducts } from '../../../../core/types'


export const categoriesApi = createApi({
	reducerPath: 'categoriesApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.100.24/api/' }),
	endpoints: build => ({
		getParent: build.query<IParent[], void>({
			query: () => 'api/parent-categories/'
		}),
		getParentChildren: build.query<ICategories[], number>({
			query: (parentId) => `category/${parentId}/children/`
		}),
		getCategoryProducts: build.query<ICategoryProducts, { categoryId?: number, currentPage: number }>({
			query: ({ categoryId, currentPage }) => `category/${categoryId}/products/?page=${currentPage}`
		})
	})
})

export const { useGetParentQuery, useGetParentChildrenQuery, useGetCategoryProductsQuery } = categoriesApi
