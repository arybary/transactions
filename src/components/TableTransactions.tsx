/** @format */

import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTransactionsRequest } from "../store/actions/transactions.actions";
import { RootState } from "../store/store";
import { useTypedSelector } from "../store/useTypedSelector";
import Table from "react-bootstrap/Table";

const TableTransactions: React.FC = () => {
  const dispatch = useDispatch();
  const {transactions} = useTypedSelector(
    (state: RootState) => state.transactions
  );
  console.log(transactions);

  const onClick = () => {
    axios.get("/transactions").then(function (response) {
      console.log(response.data);
      dispatch(fetchTransactionsRequest());
    });
  };
  return (
    <>
      <button onClick={onClick}>jft</button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Status</th>
            <th>Type</th>
            <th>ClientName</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((trans: any) => {
            const { TransactionId, Status, Type, ClientName, Amount } = trans;
            return (
              <tr>
                <td>{TransactionId}</td>
                <td>{Status}</td>
                <td>{Type}</td>
                <td>{ClientName}</td>
                <td>{Amount}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default TableTransactions;
