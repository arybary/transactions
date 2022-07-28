/** @format */

import React from "react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { useCSVReader } from "react-papaparse";
import { useActions } from "../store/useActions";

const ImportDataTransactions: React.FC = () => {
  const { fetchTransactionsRequest } = useActions();
  const { CSVReader } = useCSVReader();

  return (
    <>
      <CSVReader
        config={{ header: true }}
        onUploadAccepted={(results: any) => {
          var mock = new MockAdapter(axios);
          mock.onGet("/trans").reply(200, results.data);
          fetchTransactionsRequest();
        }}
      >
        {({ getRootProps, acceptedFile }: any) => (
          <>
            <span>{acceptedFile && `File name: ${acceptedFile.name}   .`}</span>
            <button variant="outline-success" {...getRootProps()}>
              IMPORT
            </button>
          </>
        )}
      </CSVReader>
    </>
  );
};

export default ImportDataTransactions;
