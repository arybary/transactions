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
  filter: { filterStatus: "", filterType: "" },
};

const transactionsReduser = (
  state = initialState,
  action: TransactionsActions
) => {
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
    case transactionsTypes.DELETE_TRANSACTION: {
      const newState = { ...state };
      newState.transactions = newState.transactions.filter(
        (trans: any) => trans.TransactionId !== action.payload.id
      );
      return newState;
    }
    case transactionsTypes.CHANGE_STATUS_TRANSACTION: {
      const newState = { ...state };
      const { id, statusSelect } = action.payload;
      newState.transactions = newState.transactions.map((trans: any) =>
        trans.TransactionId === id
          ? { ...trans, ...{ Status: statusSelect } }
          : trans
      );
      return newState;
    }
    case transactionsTypes.FILTER_TRANSACTIONS: {
      console.log(action.payload);
      return {
        ...state,

        filter: action.payload,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default transactionsReduser;
