/** @format */

import React from "react";
import { Provider } from "react-redux";
import ExportDataTransactions from "./components/ExportDataTransactions";
import ImportDataTransactions from "./components/ImportDataTransactions";
import TableTransactions from "./components/TableTransactions";
import store from "./store/store";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import FilterTransaction from "./components/FilterTransaction";

const App: React.FC = () => (
  <Provider store={store}>
    <ButtonToolbar
      className="justify-content-between"
      aria-label="Toolbar with Button groups"
    >
      <ButtonGroup aria-label="First group">
       <FilterTransaction />
       </ButtonGroup>
      <ButtonGroup aria-label="First group">
      <ButtonGroup aria-label="First group">
          <ImportDataTransactions />      
          <ExportDataTransactions />
       </ButtonGroup>
      </ButtonGroup>
    </ButtonToolbar>
    <TableTransactions />
  </Provider>
);

export default App;
