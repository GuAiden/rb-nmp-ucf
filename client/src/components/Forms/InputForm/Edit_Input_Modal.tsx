import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const EditInputModal: React.FunctionComponent = () => {
  const [show, setShow] = useState(false);

  const handleClose = (): void => {
    setShow(false);
  };

  const handleShow = (): void => {
    setShow(true);
  };
  return (
    <React.Fragment>
      <Button className="rounded-0" variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body>
          <p> Yo </p>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default EditInputModal;
