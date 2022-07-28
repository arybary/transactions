/** @format */

import { ITransaction } from "../../models/ITransaction";

export enum transactionsTypes {
  FETCH_TRANSACTIONS_REQUEST = "FETCH_TRANSACTIONS_REQUEST",
  FETCH_TRANSACTIONS_SUCCESS = "FETCH_TRANSACTIONS_SUCCESS",
  FETCH_TRANSACTIONS_FAILURE = "FETCH_TRANSACTIONS_FAILURE",
  DELETE_TRANSACTION = "DELETE_TRANSACTION",
  CHANGE_STATUS_TRANSACTION = "CHANGE_STATUS_TRANSACTION",
  FILTER_TRANSACTIONS = "FILTER_TRANSACTIONS",
}

export interface TransactionsState {
  pending: boolean;
  transactions: ITransaction[];
  error: string | null;
  filter: { filterStatus: string; filterType: string };
}

export interface FetchTransactionsSuccessPayload {
  transactions: ITransaction[];
}

export interface FetchTransactionsFailurePayload {
  error: string;
}

export interface DeleteTransactionIdPayload {
  id: string;
}
export interface ChangeStatusTransactionIdPayload {
  id: string;
  statusSelect: string;
}

export interface FilterTransactionPayload {
  filterStatus: string;
  filterType: string;
}
export interface FetchTransactionsRequest {
  type: typeof transactionsTypes.FETCH_TRANSACTIONS_REQUEST;
}

export type FetchTransactionsSuccess = {
  type: typeof transactionsTypes.FETCH_TRANSACTIONS_SUCCESS;
  payload: FetchTransactionsSuccessPayload;
};

export type FetchTransactionsFailure = {
  type: typeof transactionsTypes.FETCH_TRANSACTIONS_FAILURE;
  payload: FetchTransactionsFailurePayload;
};
export type DeleteTransaction = {
  type: typeof transactionsTypes.DELETE_TRANSACTION;
  payload: DeleteTransactionIdPayload;
};

export type ChangeStatusTransaction = {
  type: typeof transactionsTypes.CHANGE_STATUS_TRANSACTION;
  payload: ChangeStatusTransactionIdPayload;
};

export type FilterTransaction = {
  type: typeof transactionsTypes.FILTER_TRANSACTIONS;
  payload: FilterTransactionPayload;
};

export type TransactionsActions =
  | FetchTransactionsRequest
  | FetchTransactionsSuccess
  | FetchTransactionsFailure
  | DeleteTransaction
  | ChangeStatusTransaction
  | FilterTransaction;
