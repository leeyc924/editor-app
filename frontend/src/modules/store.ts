import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import createSagaMiddleware from 'redux-saga';

import { AUTH, authReducer } from './authSlice';
import { pokemonApi } from './rtkTestApi';

const createRootReducer = (history: History) =>
combineReducers({
  router: connectRouter(history),
  [AUTH]: authReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

const sagaMiddleware = createSagaMiddleware();

// function* rootSaga() {
//   yield all([
//     authSaga(),
//   ]);
// }

export const history: History = createBrowserHistory();

export default function createStore() {
  const store = configureStore({
    reducer: createRootReducer(history),
    devTools: true,
    middleware: [routerMiddleware(history), sagaMiddleware, pokemonApi.middleware],
  });

  // sagaMiddleware.run(rootSaga);
  setupListeners(store.dispatch);
  return store;
}