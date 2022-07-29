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
          <div
            id="example-collapse-text"
            style={{
              position: "absolute",
              padding: "2px 10px",
              borderRadius: 10,
            }}
          >
            <Card bg="light" className="mb-2">
              <Card.Header>
                <Card.Title>TRANSACTION</Card.Title>
                <Card.Subtitle>ID:{id}</Card.Subtitle>
              </Card.Header>
              <Card.Body>
                <Card.Text>Do you want delete ?</Card.Text>
                </Card.Body>
                <ButtonGroup>
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
