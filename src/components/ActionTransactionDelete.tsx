/** @format */

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import { useActions } from "../store/useActions";

interface TransactionID {
  id: string;
}
const ActionTransactionsDelete: React.FC<TransactionID> = ({ id }) => {
  const { deleteTransaction } = useActions();

  const [open, setOpen] = useState(false);

  const onDelete = () => deleteTransaction(id);

  return (
    <>
      <Button variant="danger" onClick={() => setOpen(!open)}>
        delete
      </Button>
      <div>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text" style={{ position: "relative" }}>
            <Card body>
              Do you want to Delete this TransactionId:{id}?
              <ButtonGroup size="sm">
                <Button variant="outline-danger" onClick={onDelete}>
                  Yes
                </Button>
                <Button
                  variant="outline-success"
                  onClick={() => setOpen(!open)}
                >
                  No
                </Button>
              </ButtonGroup>
            </Card>
          </div>
        </Collapse>
      </div>
    </>
  );
};

export default ActionTransactionsDelete;
