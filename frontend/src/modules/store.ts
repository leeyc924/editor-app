import { combineReducers } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import createSagaMiddleware from 'redux-saga';

import { AUTH, authReducer } from './authSlice';

const createRootReducer = (history: History) =>
combineReducers({
  router: connectRouter(history),
  [AUTH]: authReducer,
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
    middleware: [routerMiddleware(history), sagaMiddleware],
  });

  // sagaMiddleware.run(rootSaga);

  return store;
}