/** @format */
import React, { useEffect, useState } from "react";
import { useTypedSelector } from "../store/useTypedSelector";
import Table from "react-bootstrap/Table";
import TableRowTransactions from "./TableRowTransactions";
import Pagination from "react-bootstrap/Pagination";
import { TransactionsData } from "../store/selectors/transactions.selector";

const TableTransactions: React.FC = () => {
  const transactions = useTypedSelector(TransactionsData);

  const [numberPage, setNumberPage] = useState(1);
  const [trans, setTrans] = useState(transactions);
  const amountTransOnPage = 10;

  const lastPage = Math.ceil(transactions.length / amountTransOnPage);
  const itemOffset = (numberPage - 1) * amountTransOnPage;
  const endOffset = numberPage * amountTransOnPage;
  useEffect(() => {
    setTrans(transactions.slice(itemOffset, endOffset));
  }, [endOffset, itemOffset, numberPage, transactions]);

  const handleNumberPage = (event: {
    target: {
      text: string;
    };
  }) => {
    const numberPage = event.target.text;
    setNumberPage(Number(numberPage));
  };
  const handleNextPage = () => setNumberPage(numberPage + 1);
  const handlePreviosPage = () => setNumberPage(numberPage - 1);

  console.log(transactions);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Status</th>
            <th>Type</th>
            <th>ClientName</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {trans.map((trans: any, i: number) => {
            return (
              <TableRowTransactions
                key={trans.TransactionId}
                {...trans}
                nomer={i + amountTransOnPage * (Number(numberPage) - 1)}
              />
            );
          })}
        </tbody>
      </Table>
      {transactions.length && (
        <Pagination>
          <Pagination.Prev
            onClick={handlePreviosPage}
            disabled={numberPage <= 1}
          />
          <Pagination.Item onClick={(e: any) => handleNumberPage(e)}>
            1
          </Pagination.Item>
          {numberPage > 1 && <Pagination.Ellipsis disabled />}
          <Pagination.Item onClick={(e: any) => handleNumberPage(e)}>
            {numberPage < lastPage - 2 ? numberPage : lastPage - 2}
          </Pagination.Item>
          <Pagination.Item onClick={(e: any) => handleNumberPage(e)}>
            {numberPage < lastPage - 2 ? numberPage + 1 : lastPage - 1}
          </Pagination.Item>
          {numberPage < lastPage - 2 && <Pagination.Ellipsis disabled />}
          <Pagination.Item onClick={(e: any) => handleNumberPage(e)}>
            {lastPage}
          </Pagination.Item>
          <Pagination.Next
            onClick={handleNextPage}
            disabled={numberPage >= lastPage}
          />
        </Pagination>
      )}
    </>
  );
};

export default TableTransactions;
