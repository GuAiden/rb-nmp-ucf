import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './Edit_Input_Modal.css';
// import edit_icon from '../../../assets/edit_icon.png';

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
      <Button
        className="rounded-0 button-clear border px-4 py-0"
        onClick={handleShow}
      >
        <p className="my-auto card-button-text">Edit</p>
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
