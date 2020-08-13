import { call, put, takeLatest } from "redux-saga/effects";
import LoginActionTypes from "../action-types/login.action.types";
import { loginWIthFb } from "../apis/fb.login.api";

export function loginWIthFbCall() {
  return {
    type: LoginActionTypes.LOGIN_WITH_FB,
  };
}

export function loginWIthFbSuccess(json: any) {
  return {
    type: LoginActionTypes.LOGIN_WITH_FB_SUCCESS,
    data: json,
  };
}

export function loginWIthFbFailure(error: any) {
  return {
    type: LoginActionTypes.LOGIN_WITH_FB_FAILURE,
    errorMessage: error,
  };
}

export function* loginWIthFbWorker() {
  try {
    const response = yield call(loginWIthFb);
    yield put(loginWIthFbSuccess(response));
  } catch (error) {
    yield put(loginWIthFbFailure(error));
  }
}

export function* loginWIthFbSaga() {
  yield takeLatest(LoginActionTypes.LOGIN_WITH_FB, loginWIthFbWorker);
}

export function isFetchCompletedCall() {
  return {
    type: LoginActionTypes.IS_FETCH_COMPLETED,
  };
}
