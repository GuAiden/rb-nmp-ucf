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

      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body className="input-modal">
          <div className="container p-5">
            <form>
              {/* CHANNEL NAME AND NUMBER INPUTS */}
              <div className="row">
                <header className="modal-header-wrapper">
                  CREATE NEW INPUT
                </header>
              </div>
              <div className="row">
                <label htmlFor="channelNameInput" className="text-light mt-3">
                  Channel Name
                </label>
                <input
                  type="text"
                  className="form-control text-input-wrapper mt-1"
                  id="channelInput"
                />
                <label htmlFor="channelNumberInput" className="mt-3 text-light">
                  Channel Number
                </label>
                <input
                  type="text"
                  className="form-control text-input-wrapper mt-1"
                  id="channelNumber"
                />
              </div>
              {/* UNITS INPUTS WITH OUTPUT/CONVERSION CHECKBOXES */}
              <div className="row mt-4 justify-content-around">
                <div className="col-1 my-auto">
                  <span className="text-light">Units</span>
                </div>
                <div className="col-lg-5">
                  <input type="text" className="form-control ml-5" />
                </div>
                <div className="col-2 my-auto">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label ml-2"
                      htmlFor="flexCheckDefault"
                    >
                      Output?
                    </label>
                  </div>
                </div>
                <div className="col-3 my-auto">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Conversion?
                    </label>
                  </div>
                </div>
              </div>
              {/* X AND Y INPUTS */}
              <div className="row mt-4 justify-content-around">
                <div className="col-lg-5">
                  <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text input-group-text-wrapper">
                      X:
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text input-group-text-wrapper">
                      Y:
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      aria-label="Sizing example input"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </div>
                </div>
              </div>
              {/* ADD OR SAVE MODAL BUTTONS */}
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
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default CreateInputModal;
