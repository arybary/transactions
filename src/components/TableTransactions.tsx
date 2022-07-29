/** @format */
import React, { useState } from "react";
import { useTypedSelector } from "../store/useTypedSelector";
import Table from "react-bootstrap/Table";
import TableRowTransactions from "./TableRowTransactions";
import { TransactionsData } from "../store/selectors/transactions.selector";
import PaginationTableTransactions from "./PaginationTableTransactions";
import FilterTransaction from "./FilterTransaction";

const TableTransactions: React.FC = () => {
  const transactions = useTypedSelector(TransactionsData);
  const [numberPage, setNumberPage] = useState(1);

  const amountTransOnPage = 10;
  const lastPage = Math.ceil(transactions.length / amountTransOnPage);
  const itemOffset = (numberPage - 1) * amountTransOnPage;
  const endOffset = numberPage * amountTransOnPage;

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
  const trans = transactions.slice(itemOffset, endOffset);

  console.log(transactions);
  return (
    <>
      {transactions.length!==0 && (
        <><FilterTransaction />
          <Table striped bordered hover >
            <thead>
              <tr>
                <th>#</th>                
                <th>Status</th>
                <th>Type</th>
                <th>ClientName</th>
                <th>Amount</th>
                <th>Action</th>
                <th>Id</th>
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
          <PaginationTableTransactions
            numberPage={numberPage}
            lastPage={lastPage}
            handlePreviosPage={handlePreviosPage}
            handleNumberPage={handleNumberPage}
            handleNextPage={handleNextPage}
          />
        </>
      )}
    </>
  );
};

export default TableTransactions;
