/** @format */

import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { ITransaction } from "../../models/ITransaction";
import {
  fetchTransactionsFailure,
  fetchTransactionsSuccess,
} from "../actions/transactions.actions";
import { transactionsTypes } from "../types/transactions.types";

const getTransactions = () => axios.get<ITransaction[]>("/transactions");

function* fetchTransactionsSaga() {
  try {
    const response: AxiosResponse<ITransaction[]> = yield call(getTransactions);
    yield put(
      fetchTransactionsSuccess({
        transactions: response.data as ITransaction[],
      })
    );
  } catch (e: any) {
    yield put(
      fetchTransactionsFailure({
        error: e.message as string,
      })
    );
  }
}

function* transactionsSaga() {
  yield all([
    takeLatest(
      transactionsTypes.FETCH_TRANSACTIONS_REQUEST,
      fetchTransactionsSaga
    ),
  ]);
}

export default transactionsSaga;
