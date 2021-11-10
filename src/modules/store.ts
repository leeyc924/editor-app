import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ACCOUNT, accountReducer } from './accountSlice';
import { baseApi } from './baseApi';

const createRootReducer = () =>
  combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    [ACCOUNT]: accountReducer,
  });

export const store = configureStore({
  reducer: createRootReducer(),
  devTools: true,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), baseApi.middleware],
});

export type RootState = ReturnType<typeof store.getState>;
