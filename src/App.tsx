/** @format */

import React from "react";
import { Provider } from "react-redux";
import ExportDataTransactions from "./components/ExportDataTransactions";
import ImportDataTransactions from "./components/ImportDataTransactions";
import TableTransactions from "./components/TableTransactions";
import store from "./store/store";
import "./App.scss";

const App: React.FC = () => (
  <Provider store={store}>
    <header>
      <h3>TRABSACTION management</h3>
      <div>
        <ImportDataTransactions />
        <ExportDataTransactions />
      </div>
    </header>
    <TableTransactions />
  </Provider>
);

export default App;
