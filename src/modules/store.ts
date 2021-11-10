import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { baseApi } from './baseApi';

const createRootReducer = () =>
  combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
  });

export const store = configureStore({
  reducer: createRootReducer(),
  devTools: true,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), baseApi.middleware],
});

export type RootState = ReturnType<typeof store.getState>;
