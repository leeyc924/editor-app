import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory, History } from 'history';
import { api } from "./api";

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    [api.reducerPath]: api.reducer
  });

// const sagaMiddleware = createSagaMiddleware();

// // function* rootSaga() {
// //   yield all([
// //     authSaga(),
// //   ]);
// // }

// export const history: History = createBrowserHistory();

// export default function createStore() {
//   const store = configureStore({
//     reducer: createRootReducer(history),
//     devTools: true,
//     middleware: [routerMiddleware(history), sagaMiddleware, pokemonApi.middleware],
//   });

  // sagaMiddleware.run(rootSaga);
  // setupListeners(store.dispatch);
  // return store;
// }

export const history: History = createBrowserHistory();

export const store = configureStore({
  reducer: createRootReducer(history),
  devTools: true,
  middleware: (gDM) => gDM().concat(api.middleware).concat(routerMiddleware(history)),
});

export type RootState = ReturnType<typeof store.getState>;
