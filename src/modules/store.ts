import { combineReducers, configureStore, isRejectedWithValue, Middleware } from '@reduxjs/toolkit';
import { ACCOUNT, accountReducer, accountAction } from './accountSlice';
import { baseApi } from './baseApi';

const createRootReducer = () =>
  combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    [ACCOUNT]: accountReducer,
  });

const unauthenticatedMiddleware: Middleware = ({
  dispatch
}) => (next) => (action) => {
    if (isRejectedWithValue(action) && action.payload.status === 403) {
      dispatch(accountAction.resetState());
    }

    return next(action);
   };


export const store = configureStore({
  reducer: createRootReducer(),
  devTools: true,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), baseApi.middleware, unauthenticatedMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
