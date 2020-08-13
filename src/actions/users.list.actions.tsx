import { call, put, takeLatest } from "redux-saga/effects";
import FetchUsersFromSqlite from "../action-types/users.list.action.types";
import { getUsersFromSqlite } from "../models/sqlite.operations";

export function getUsersFromSqliteCall() {
  return {
    type: FetchUsersFromSqlite.FETCH_USERS_FROM_SQLITE,
  };
}

export function getUsersFromSqliteSuccess(json: any) {
  return {
    type: FetchUsersFromSqlite.FETCH_USERS_FROM_SQLITE_SUCCESS,
    data: json,
  };
}

export function getUsersFromSqliteFailure(error: any) {
  return {
    type: FetchUsersFromSqlite.FETCH_USERS_FROM_SQLITE_FAILURE,
    errorMessage: error,
  };
}

export function* getUsersFromSqliteWorker() {
  try {
    const response = yield call(getUsersFromSqlite);
    yield put(getUsersFromSqliteSuccess(response));
  } catch (error) {
    yield put(getUsersFromSqliteFailure(error));
  }
}

export function* getUsersFromSqliteSaga() {
  yield takeLatest(
    FetchUsersFromSqlite.FETCH_USERS_FROM_SQLITE,
    getUsersFromSqliteWorker
  );
}

export function reloadDataCall(params: Boolean) {
  return {
    type: FetchUsersFromSqlite.RELOAD_DATA,
    params,
  };
}
