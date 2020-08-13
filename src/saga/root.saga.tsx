import { all } from "redux-saga/effects";
import { loginWIthFbSaga } from "../actions/login.actions";
import { getUsersFromSqliteSaga } from "../actions/users.list.actions";

export default function* rootSaga() {
  yield all([loginWIthFbSaga(), getUsersFromSqliteSaga()]);
}
