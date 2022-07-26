/** @format */

import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
  Middleware,
} from "redux";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import transactionsReduser from "./redusers/transactions.redusers";
import transactionsSaga from "./sagas/transactions.saga";

const rootReduser = combineReducers({ transactions: transactionsReduser });

const logger: Middleware<{}, RootState> = (state) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  console.groupEnd();
  return result;
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type RootState = ReturnType<typeof rootReduser>;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReduser,
  composeEnhancers(applyMiddleware(sagaMiddleware, logger))
);
function* rootSaga() {
  yield all([fork(transactionsSaga)]);
}
sagaMiddleware.run(rootSaga);

export default store;
