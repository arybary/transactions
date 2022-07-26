/** @format */

import {
  TransactionsActions,
  TransactionsState,
  transactionsTypes,
} from "../types/transactions.types";

const initialState: TransactionsState = {
  pending: false,
  transactions: [],
  error: null,
};

const transactionsReduser = (state = initialState, action: TransactionsActions) => {
  switch (action.type) {
    case transactionsTypes.FETCH_TRANSACTIONS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case transactionsTypes.FETCH_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        pending: false,
        transactions: action.payload.transactions,
        error: null,
      };
    case transactionsTypes.FETCH_TRANSACTIONS_FAILURE:
      return {
        ...state,
        pending: false,
        transactions: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default transactionsReduser;
