
import {
  FetchTransactionsFailure,
  FetchTransactionsFailurePayload,
  FetchTransactionsRequest,
  FetchTransactionsSuccess,
  FetchTransactionsSuccessPayload, 
  transactionsTypes
} from "../types/transactions.types";

export const fetchTransactionsRequest = (): FetchTransactionsRequest => ({
  type: transactionsTypes.FETCH_TRANSACTIONS_REQUEST
});

export const fetchTransactionsSuccess = (
  payload: FetchTransactionsSuccessPayload
): FetchTransactionsSuccess => ({
  type: transactionsTypes.FETCH_TRANSACTIONS_SUCCESS,
  payload
});

export const fetchTransactionsFailure = (
  payload: FetchTransactionsFailurePayload
): FetchTransactionsFailure => ({
  type: transactionsTypes.FETCH_TRANSACTIONS_FAILURE,
  payload
});

