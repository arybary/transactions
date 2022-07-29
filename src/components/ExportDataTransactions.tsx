/** @format */

import React from "react";
import { useCSVDownloader } from "react-papaparse";
import { useTypedSelector } from "../store/useTypedSelector";
import { TransactionsData } from "../store/selectors/transactions.selector";
import Button from "react-bootstrap/Button";

const ExportDataTransactions: React.FC = () => {
  const { CSVDownloader } = useCSVDownloader();
  const transactions = useTypedSelector(TransactionsData);

  return (
    <>
      <style type="text/css">
        {`
.btn-export{
background-color:  purple;
color: white;
border-radius:0 30px 30px 0;
margin: 5px;
}
`}
      </style>
      <CSVDownloader
        filename={"Transactions"}
        bom={true}
        config={{
          delimiter: ";",
        }}
        data={transactions}
      >
        <Button variant="export">export</Button>
      </CSVDownloader>
    </>
  );
};

export default ExportDataTransactions;
