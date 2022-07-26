/** @format */

import React from "react";

import { useCSVReader } from "react-papaparse";

const ImportDataTransactions = () => {
  const { CSVReader } = useCSVReader();
  const baseUrl = "https://61cdc8267067f600179c5c46.mockapi.io/transactions";

  const fetchDataTransactions = (transactions) => {
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(transactions),
    }).then((respone) => {
      if (!respone.ok) {
        throw new Error("HEXYSI");
      }
    });
  };

  return (
    <>
      <CSVReader
        config={{ header: true }}
        onUploadAccepted={(results) => {
          console.log("---------------------------");
          console.log(results);
          console.log("---------------------------");
          results.data.map((data) =>
            setTimeout(fetchDataTransactions(data), 1000)
          );
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
