/** @format */

import React from "react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { useCSVReader } from "react-papaparse";
import { useActions } from "../store/useActions";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const ImportDataTransactions: React.FC = () => {
  const { fetchTransactionsRequest } = useActions();
  const { CSVReader } = useCSVReader();

  return (
    <>
      <style type="text/css">
        {`
.btn-import {
  background-color: green;
  color: white;
  border-radius:30px 0 0 30px;
  margin:5px;
 `}
      </style>
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
            <Badge bg="secondary">
              {acceptedFile && `File name: ${acceptedFile.name}`}
            </Badge>
            <Button variant="import" {...getRootProps()}>
              import
            </Button>
          </>
        )}
      </CSVReader>
    </>
  );
};

export default ImportDataTransactions;
