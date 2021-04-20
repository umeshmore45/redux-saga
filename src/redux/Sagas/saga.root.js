import { getUser } from "../user";
import { takeLatest } from "redux-saga/effects";
import { fetchUser } from "./saga";

function* rootSaga() {
  yield takeLatest(getUser.type, fetchUser);
}

export default rootSaga;
