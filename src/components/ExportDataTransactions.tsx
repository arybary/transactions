/** @format */

import React from "react";
import { useCSVDownloader } from "react-papaparse";
import { RootState } from "../store/store";
import { useTypedSelector } from "../store/useTypedSelector";
import Button from "react-bootstrap/Button";

const ExportDataTransactions: React.FC = () => {
  const { CSVDownloader } = useCSVDownloader();
  const { transactions } = useTypedSelector(
    (state: RootState) => state.transactions
  );

  return (
    <CSVDownloader
      filename={"Transactions"}
      bom={true}
      config={{
        delimiter: ";",
      }}
      data={transactions}
    >
      {" "}
      <Button variant="outline-warning">EXPORT</Button>
    </CSVDownloader>
  );
};

export default ExportDataTransactions;
