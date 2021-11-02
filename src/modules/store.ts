import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import { accountApi } from "./accountApi";

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    [accountApi.reducerPath]: accountApi.reducer
  });

export const history: History = createBrowserHistory();

export const store = configureStore({
  reducer: createRootReducer(history),
  devTools: true,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware() ,accountApi.middleware, routerMiddleware(history)],
});

export type RootState = ReturnType<typeof store.getState>;
