import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./sevices/features/productsApi/productsApi";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
