import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './index.css';

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
        <Modal.Body className="input-modal">
          <div className="container">
            <div className="row">
              <header className="modal-header-wrapper">CREATE NEW INPUT</header>
            </div>
            <div className="row">
              <text>Form inputs soon</text>
              <form>
                <div className="form-group">
                  <label htmlFor="channelNameInput">Channel Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="channelInput"
                  />
                </div>
              </form>
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
      </Modal>
    </>
  );
};

export default CreateInputModal;
