import {
  createSlice,
  createDraftSafeSelector,
  PayloadAction,
} from '@reduxjs/toolkit';

interface LoginPayload {
  loginId: string;
  loginPw: string;
  idSave: string;
}

interface LoginInfo {
  accountNm?: string;
  accountPw?: string;
  lastLoginDt?: string;
}

interface AuthState {
  loginInfo: LoginInfo;
  actionResult: string;
  isLogin: boolean;
  isLoading: boolean;
  error: string;
}

const authInitialState: AuthState = {
  loginInfo: {},
  actionResult: '',
  isLogin: false,
  isLoading: false,
  error: '',
};

const reducers = {
  login: (state: AuthState, { payload }: PayloadAction<LoginPayload>) => {
    state.actionResult = 'LOGIN_REQ';
    state.error = '';
  },
  loginSuccess: (state: AuthState, { payload }: PayloadAction<AuthState>) => {
    state.loginInfo = payload.loginInfo;
    state.isLogin = true;
    state.isLoading = false;
    state.actionResult = 'LOGIN_OK';
    state.error = '';
  },
  loginFailure: (state: AuthState, action: PayloadAction<string>) => {
    state.isLogin = false;
    state.isLoading = false;
    state.actionResult = 'LOGIN_ERR';
    state.error = action.payload;
  },
  // logout: (state: AuthState, { payload }: PayloadAction<LoginPayload>) => {
  //   state.isLoading = true;
  //   state.actionResult = 'LOGOUT_REQ';
  //   state.error = '';
  // },
  // logoutSuccess: (state: AuthState) => {
  //   state.isLogin = false;
  //   state.loginInfo = {};
  //   state.isLoading = false;
  //   state.actionResult = 'LOGOUT_OK';
  //   state.error = '';
  // },
  // logoutFailure: (state: AuthState, action: PayloadAction<string>) => {
  //   state.isLogin = false;
  //   state.loginInfo = {};
  //   state.isLoading = false;
  //   state.actionResult = 'LOGOUT_ERR';
  //   state.error = action.payload;
  // },
  actionResultClear: (state: AuthState) => {
    state.actionResult = '';
  },
};

const slice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: reducers,
});

// const selectLoginInfo = createDraftSafeSelector(
//   (state: AuthState) => state.loginInfo,
//   loginInfo => loginInfo,
// );

// const selectStatus = createDraftSafeSelector(
//   (state: AuthState) => state.isLogin,
//   (state: AuthState) => state.actionResult,
//   (state: AuthState) => state.isLoading,
//   (state: AuthState) => state.error,
//   (isLogin, actionResult, isLoading, error) => ({
//     isLogin,
//     actionResult,
//     isLoading,
//     error,
//   }),
// );

// export const authSelector = {
//   loginInfo: state => selectLoginInfo(state[AUTH]),
//   status: state => selectStatus(state[AUTH]),
// };

export const AUTH = slice.name;
export const authReducer = slice.reducer;
export const authAction = slice.actions;