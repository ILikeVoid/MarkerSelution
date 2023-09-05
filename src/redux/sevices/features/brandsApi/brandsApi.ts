import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IBrandProducts, IBrands, IProducts } from '../../../../core/types'

export const brandsApi = createApi({
	reducerPath: 'brandsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://192.168.100.24/api/' }),
	endpoints: build => ({
		getBrands: build.query<IBrands[], void>({
			query: () => `brands/`
		}),
		getBrandDetails: build.query<IBrands, number>({
			query: (brandId) => `brands/${brandId}/`
		}),
		getBrandProducts: build.query<IBrandProducts, { brandId: number, currentPage: number }>({
			query: ({brandId, currentPage }) => `api/products/by-brand/${brandId}/?page=${currentPage}`
		})
	})
})


export const { useGetBrandsQuery, useGetBrandDetailsQuery, useGetBrandProductsQuery } = brandsApi