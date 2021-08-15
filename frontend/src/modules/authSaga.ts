import { all, fork, call, put, takeLatest } from 'redux-saga/effects';
import { authAction } from './authSlice';

import dayjs from 'dayjs';

// function* handleLogin({ payload }) {
//   try {
//   } catch (err) {
//   }
// }

// function* handleLogout({ payload }) {
//   try {
//     localStorage.removeItem('accessToken');

//     yield put(authAction.logoutSuccess());
//   } catch (err) {
//     yield put(authAction.logoutFailure('Logout Error'));
//   }
// }

// export function* watchLogin() {
//   yield takeLatest(authAction.login, handleLogin);
// }

// export function* watchLogout() {
//   yield takeLatest(authAction.logout, handleLogout);
// }

// function* rootSaga() {
//   yield all([
//     fork(watchLogin),
//     fork(watchToken),
//     fork(watchLogout),
//   ]);
// }

// export default rootSaga;