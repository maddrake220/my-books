import { all } from "redux-saga/effects";
import { autoSaga } from "./auth";
export default function* rootSaga() {
  yield all([autoSaga()]);
}
