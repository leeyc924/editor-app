import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { accountApi } from './accountApi';

const createRootReducer = () =>
  combineReducers({
    [accountApi.reducerPath]: accountApi.reducer,
  });

export const store = configureStore({
  reducer: createRootReducer(),
  devTools: true,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), accountApi.middleware],
});

export type RootState = ReturnType<typeof store.getState>;
