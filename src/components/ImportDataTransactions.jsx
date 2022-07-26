/** @format */

import React from "react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { useCSVReader } from "react-papaparse";

const ImportDataTransactions = () => {
  const { CSVReader } = useCSVReader();

  return (
    <>
      <CSVReader
        config={{ header: true }}
        onUploadAccepted={(results) => {
          const mock = new MockAdapter(axios);

          mock.onGet("/transactions").reply(200, {
            transactions: results.data,
          });
          mock.onPost("/transactions").reply(function (config) {
            return axios.get("/transactions");
          });

          console.log("---------------------------");
          console.log(results);
          console.log("---------------------------");
        }}
      >
        {({ getRootProps, acceptedFile }) => (
          <>
            <button type="button" {...getRootProps()}>
              Import
            </button>
            <div>{acceptedFile && acceptedFile.name}</div>
          </>
        )}
      </CSVReader>
    </>
  );
};

export default ImportDataTransactions;
