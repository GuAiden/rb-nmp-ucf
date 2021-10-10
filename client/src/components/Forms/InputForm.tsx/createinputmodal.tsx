import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './index.css'

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

      <Modal show={show} onHide={handleClose} centered>
        {/* <Modal.Header className="modal-wrapper input-modal">
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body className="input-modal">
          <div className="container">
            <div className="row">
              <header className="modal-header-wrapper">CREATE NEW INPUT</header>
            </div>
            <div className="row">
              <text>Form inputs soon</text>
            </div>
            <div className="row justify-content-end">
              <div className="col-2">
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleClose}
                  className="modal-add-wrapper"
                >
                  Add
                </Button>
              </div>
              <div className="col-2">
                <Button variant="primary" size="lg" onClick={handleClose}>
                  Save
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer className="input-modal">
          <Button variant="secondary" size="lg" onClick={handleClose}>
            Add
          </Button>
          <Button variant="primary" size="lg" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default CreateInputModal;
