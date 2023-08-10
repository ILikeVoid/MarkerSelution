import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from './sevices/features/productsApi/productsApi'
import { brandsApi } from './sevices/features/brandsApi/brandsApi'
import { categoriesApi } from './sevices/features/categoriesApi/categoriesApi'

export const store = configureStore({
	reducer: {
		[productsApi.reducerPath]: productsApi.reducer,
		[brandsApi.reducerPath]: brandsApi.reducer,
		[categoriesApi.reducerPath]: categoriesApi.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(productsApi?.middleware, brandsApi?.middleware, categoriesApi?.middleware)
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
