/** @format */

import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTransactionsRequest } from "../store/actions/transactions.actions";
import { RootState } from "../store/store";
import { useTypedSelector } from "../store/useTypedSelector";

const TableTransactions: React.FC = () => {
  const dispatch = useDispatch();
  const { pending, transactions, error } = useTypedSelector(
    (state: RootState) => state.transactions
  );
  console.log(pending, transactions, error );

  useEffect(() => {
    dispatch(fetchTransactionsRequest());
  }, [error]);
  const onClick = () => {
    axios.get("/transactions").then(function (response) {
      console.log(response.data);
      dispatch(fetchTransactionsRequest());
    });
  };
  return (
    <>
      <button onClick={onClick}>jft</button>
  
    </>
  );
};

export default TableTransactions;
