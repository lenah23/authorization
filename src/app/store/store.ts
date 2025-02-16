import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './Requests/authApi';
import { industryApi } from './Requests/industriesApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [industryApi.reducerPath]: industryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, industryApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
