import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

/**
 * @returns A modal component that opens to handle form input for the 'inputs' page
 */
const CreateInputModal: React.FC = () => {
  const [show, setShow] = useState(false);

  function handleShow(): void {
    setShow(true);
  }
  function handleClose(): void {
    setShow(false);
  }

  return (
    <>
      <div className="float-left">
        <Button variant="primary" onClick={handleShow}>
          Create new
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateInputModal;
