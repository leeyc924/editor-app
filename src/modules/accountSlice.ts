import { createSlice, createDraftSafeSelector } from '@reduxjs/toolkit';
import { IAccountSliceState } from 'models/account';

import { accountApi } from './accountApi';
import { RootState } from './store';

const accountInitialState: IAccountSliceState = {
  accountInfo: {},
  isLogin: false,
  isLoading: false,
};

const slice = createSlice({
  name: 'account',
  initialState: accountInitialState,
  reducers: {
    resetState: (state: IAccountSliceState) => {
      state.accountInfo = {};
      state.isLogin = false;
      state.isLoading = false;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(accountApi.endpoints.login.matchPending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addMatcher(accountApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.accountInfo = payload.accountInfo;
      state.isLogin = true;
      state.isLoading = false;
    });
    builder.addMatcher(accountApi.endpoints.login.matchRejected, (state, { payload }) => {
      state.accountInfo = {};
      state.isLogin = false;
      state.isLoading = false;
    });
    builder.addMatcher(accountApi.endpoints.signup.matchPending, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addMatcher(accountApi.endpoints.signup.matchFulfilled, (state, { payload }) => {
      state.accountInfo = payload.accountInfo;
      state.isLogin = true;
      state.isLoading = false;
    });
    builder.addMatcher(accountApi.endpoints.signup.matchRejected, (state, { payload }) => {
      state.accountInfo = {};
      state.isLogin = false;
      state.isLoading = false;
    });
    builder.addMatcher(accountApi.endpoints.confirmToken.matchPending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addMatcher(accountApi.endpoints.confirmToken.matchFulfilled, (state, { payload }) => {
      state.accountInfo = payload.accountInfo;
      state.isLogin = true;
      state.isLoading = false;
    });
    builder.addMatcher(accountApi.endpoints.confirmToken.matchRejected, (state, { payload }) => {
      state.accountInfo = {};
      state.isLogin = false;
      state.isLoading = false;
    });
  },
});

const selectAccountInfo = createDraftSafeSelector(
  (state: IAccountSliceState) => state.accountInfo,
  accountInfo => accountInfo,
);

const selectIsLogin = createDraftSafeSelector(
  (state: IAccountSliceState) => state.isLogin,
  isLogin => isLogin,
);

const selectIsLoading = createDraftSafeSelector(
  (state: IAccountSliceState) => state.isLoading,
  isLoading => isLoading,
);

export const accountSelector = {
  accountInfo: (state: RootState) => selectAccountInfo(state[ACCOUNT]),
  isLogin: (state: RootState) => selectIsLogin(state[ACCOUNT]),
  isLoading: (state: RootState) => selectIsLoading(state[ACCOUNT]),
};

export const ACCOUNT = slice.name;
export const accountReducer = slice.reducer;
export const accountAction = slice.actions;
