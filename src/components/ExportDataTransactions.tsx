/** @format */

import React from "react";
import { useCSVDownloader } from "react-papaparse";
import { useTypedSelector } from "../store/useTypedSelector";
import { TransactionsData } from "../store/selectors/transactions.selector";

const ExportDataTransactions: React.FC = () => {
  const { CSVDownloader, Type } = useCSVDownloader();
  const transactions = useTypedSelector(TransactionsData);

  return (
    <CSVDownloader
      filename={"Transactions"}
      type={Type.Button}
      bom={true}
      config={{
        delimiter: ";",
      }}
      data={transactions}
    >
      EXPORT
    </CSVDownloader>
  );
};

export default ExportDataTransactions;
