/** @format */

import axios from "axios";
import React from "react";
import { Provider } from "react-redux";
import ExportDataTransactions from "./components/ExportDataTransactions";
import ImportDataTransactions from "./components/ImportDataTransactions";
import TableTransactions from "./components/TableTransactions";
import store from "./store/store";

function App() {
  
  return (
    <Provider store={store} >
      <ImportDataTransactions />
      <ExportDataTransactions />
      <TableTransactions />   
    </Provider>
  );
}

export default App;
