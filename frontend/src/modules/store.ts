import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import { api } from "./api";

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    [api.reducerPath]: api.reducer
  });

export const history: History = createBrowserHistory();

export const store = configureStore({
  reducer: createRootReducer(history),
  devTools: true,
  middleware: (gDM) => gDM().concat(api.middleware).concat(routerMiddleware(history)),
});

export type RootState = ReturnType<typeof store.getState>;
