/** @format */

import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as TransactionsActionCreators from "./actions/transactions.actions";
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(TransactionsActionCreators, dispatch);
};
