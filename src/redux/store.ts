import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./sevices/features/productsApi/productsApi";
import { brandsApi } from "./sevices/features/brandsApi/brandsApi";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
		[brandsApi.reducerPath]: brandsApi.reducer
  },
	middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi?.middleware, brandsApi?.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
