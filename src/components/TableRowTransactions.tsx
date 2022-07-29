/** @format */

import React from "react";
import ActionTransactionsDelete from "./ActionTransactionDelete";
import ActionTransactionsEdit from "./ActionTransactionEdit";
import ButtonGroup from "react-bootstrap/ButtonGroup";

interface Transaction {
  nomer: number;
  TransactionId: string;
  Status: string;
  Type: string;
  ClientName: string;
  Amount: string;
}

const TableRowTransactions: React.FC<Transaction> = ({
  nomer,
  TransactionId,
  Status,
  Type,
  ClientName,
  Amount,
}) => (
  <tr>
    <td>{nomer + 1}</td>
    <td>{Status}</td>
    <td>{Type}</td>
    <td>{ClientName}</td>
    <td>{Amount}</td>
    <td>
      <ButtonGroup size="sm">
        <ActionTransactionsEdit id={TransactionId} />
        <ActionTransactionsDelete id={TransactionId} />
      </ButtonGroup>
    </td>
    <td>{TransactionId}</td>
  </tr>
);

export default TableRowTransactions;
