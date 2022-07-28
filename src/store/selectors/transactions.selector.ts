/** @format */

import { createSelector } from "reselect";
import { RootState } from "./../store";

export const transactionsDataSelector = (state: RootState) =>
  state.transactions.transactions;

export const filterTransactionsDataSelector = (state: RootState) =>
  state.transactions.filter;

export const TransactionsData = createSelector(
  [transactionsDataSelector, filterTransactionsDataSelector],
  (transactions, filter) => {
    const { filterStatus, filterType } = filter;
    if (filterStatus === "" && filterType === "") {
      return transactions;
    }
    return transactions
      .filter((trans: any) => {
        console.log(trans.Status, filterStatus);
        return filterStatus === "" ? true : trans.Status === filterStatus;
      })
      .filter((trans: any) => {
        console.log(trans.Type, filterType);
        return filterType === "" ? true : trans.Type === filterType;
      });
  }
);
