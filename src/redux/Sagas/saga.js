import { setUser } from "../user";
import { call, put } from "redux-saga/effects";
import axios from "axios";

const get = () => {
  return axios.get("https://jsonplaceholder.typicode.com/todos/1");
};

export function* fetchUser(actions) {
  try {
    const { data } = yield call(get);
    yield put(setUser({ ...data }));
  } catch (e) {
    console.log(e);
  }
}
