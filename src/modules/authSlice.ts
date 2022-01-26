import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export interface IAuthState {
  accessToken?: string;
}

const initialState: IAuthState = {};

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    updateAccessToken(state, action: PayloadAction<string | undefined>) {
      state.accessToken = action.payload;
    },
  },
});

export const authReducer =  persistReducer({
  key: 'rtk:auth',
  storage,
  whitelist: ['accessToken']
}, authSlice.reducer);

export const AUTH = authSlice.name;
export const authAction = authSlice.actions;