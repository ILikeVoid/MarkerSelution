import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IBrands } from '../../../../core/types'

export const brandsApi = createApi({
	reducerPath: 'brandsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://195.49.210.12/api/' }),
	endpoints: build => ({
		getBrands: build.query<IBrands[], void>({
			query: () => `brands/`
		})
	})
})


export const { useGetBrandsQuery } = brandsApi