/** @format */

import { ITransaction } from "../../models/ITransaction";

export enum transactionsTypes {
  FETCH_TRANSACTIONS_REQUEST = "FETCH_TRANSACTIONS_REQUEST",
  FETCH_TRANSACTIONS_SUCCESS = "FETCH_TRANSACTIONS_SUCCESS",
  FETCH_TRANSACTIONS_FAILURE = "FETCH_TRANSACTIONS_FAILURE",
}

export interface TransactionsState {
  pending: boolean;
  transactions: ITransaction[];
  error: string | null;
}

export interface FetchTransactionsSuccessPayload {
  transactions: ITransaction[];
}

export interface FetchTransactionsFailurePayload {
  error: string;
}

export interface FetchTransactionsIdsPayload {
  error: number;
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

export type TransactionsActions =
  | FetchTransactionsRequest
  | FetchTransactionsSuccess
  | FetchTransactionsFailure;
