import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Sagas/saga.root";
import userReducer from "./user";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: {
    userReducer
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleWare]
});

sagaMiddleWare.run(rootSaga);

export default store;
