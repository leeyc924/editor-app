import { combineReducers, configureStore, createAction, isRejectedWithValue, Middleware } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Reducer } from 'redux';
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

import { baseApi } from './baseApi';
import { AUTH, authReducer } from './authSlice';
const reducers = {
  [baseApi.reducerPath]: baseApi.reducer,
  [AUTH]: authReducer,
};

export const unauthenticatedMiddleware: Middleware =
  ({ dispatch }) =>
  next =>
  action => {
    if (isRejectedWithValue(action) && action.payload.status === 401) {
      dispatch(
        createAction('resetState', () => {
          return { payload: null };
        }),
      );
    }

    return next(action);
  };

const combinedReducer = combineReducers<typeof reducers>(reducers);
export const rootReducer: Reducer<RootState> = (state, action) => {
  if (action.type === 'resetState') {
    state = {} as RootState;
  }

  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([unauthenticatedMiddleware, baseApi.middleware]),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;
export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
