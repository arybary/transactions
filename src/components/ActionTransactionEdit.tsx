/** @format */

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import { useActions } from "../store/useActions";

interface TransactionID {
  id: string;
}
const ActionTransactionsEdit: React.FC<TransactionID> = ({ id }) => {
  const { statusTransaction } = useActions();
  const [show, setShow] = useState(false);
  const [statusSelected, setStatusSelected] = useState("");

  const statusChoice = ["Pending", "Completed", "Cancelled"];
  const onSelectStatus = (e: any) => setStatusSelected(e.target.textContent);
  const handleClose = () => {
    setShow(false);
    setStatusSelected("");
  };
  const handleShow = () => setShow(true);
  const onChangeStatusTransaction = () => {
    statusTransaction(id, statusSelected);
    setShow(false);
    setStatusSelected("");
  };
  return (
    <>
      <Button variant="info" onClick={handleShow}>
        edit
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select status TransactionId {id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup as="ul">
            {statusChoice.map((status, i) => (
              <ListGroup.Item
                key={i}
                active={status === statusSelected}
                action
                variant="success"
                onClick={onSelectStatus}
                title={status}
              >
                {status}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={onChangeStatusTransaction}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ActionTransactionsEdit;
