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
    const { filterColum, filterColumName } = filter;
    if (filterColum === "") {
      return transactions;
    } else
      return transactions.filter((trans: any) => {
        console.log(trans.filterColum, filterColumName);
        return trans[filterColum] === filterColumName;
      });
  }
);
