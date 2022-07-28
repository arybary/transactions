/** @format */

import {
  DeleteTransaction,
  FetchTransactionsFailure,
  FetchTransactionsFailurePayload,
  FetchTransactionsRequest,
  FetchTransactionsSuccess,
  FetchTransactionsSuccessPayload,
  TransactionsActions,
  transactionsTypes,
} from "../types/transactions.types";

export const fetchTransactionsRequest = (): FetchTransactionsRequest => ({
  type: transactionsTypes.FETCH_TRANSACTIONS_REQUEST,
});

export const fetchTransactionsSuccess = (
  payload: FetchTransactionsSuccessPayload
): FetchTransactionsSuccess => ({
  type: transactionsTypes.FETCH_TRANSACTIONS_SUCCESS,
  payload,
});

export const fetchTransactionsFailure = (
  payload: FetchTransactionsFailurePayload
): FetchTransactionsFailure => ({
  type: transactionsTypes.FETCH_TRANSACTIONS_FAILURE,
  payload,
});

export const deleteTransaction = (id: string): DeleteTransaction => ({
  type: transactionsTypes.DELETE_TRANSACTION,
  payload: { id },
});

export const statusTransaction = (
  id: string,
  statusSelect: string
): TransactionsActions => ({
  type: transactionsTypes.CHANGE_STATUS_TRANSACTION,
  payload: { id, statusSelect },
});

export const filterTransaction = (
  filterColum: string,
  filterColumName: string
): TransactionsActions => ({
  type: transactionsTypes.FILTER_TRANSACTIONS,
  payload: { filterColum, filterColumName },
});
