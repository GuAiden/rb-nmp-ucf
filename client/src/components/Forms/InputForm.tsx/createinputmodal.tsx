import React, { useState } from 'react';
import { Button, Form, FormControl, InputGroup, Modal } from 'react-bootstrap';
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
                <Form.Group
                  className="mt-3 text-light"
                  controlId="channelName.ControlInput"
                >
                  <Form.Label>Channel Name</Form.Label>
                  <Form.Control type="text" className="text-input-wrapper" />
                </Form.Group>
                <Form.Group
                  className="mt-3 text-light"
                  controlId="channelNumber.ControlInput"
                >
                  <Form.Label>Channel Number</Form.Label>
                  <Form.Control type="text" className="text-input-wrapper" />
                </Form.Group>
              </div>
              {/* UNITS INPUTS WITH OUTPUT/CONVERSION CHECKBOXES */}
              <div className="row mt-4 justify-content-around">
                <div className="col-6 my-auto">
                  <InputGroup className="input-group-sm mb-3">
                    <InputGroup.Text className="input-group-text-wrapper">
                      Units:
                    </InputGroup.Text>
                    <FormControl
                      aria-label="Units input"
                      aria-describedby="inputGroup-sizing-sm"
                      className="text-input-wrapper"
                    ></FormControl>
                  </InputGroup>
                </div>
                <div className="col-lg-5 my-auto">
                  <>
                    {['checkbox' as const].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          inline
                          label="Output?"
                          name="group1"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label="Conversion?"
                          name="group1"
                          type={type}
                          id={`inline-${type}-2`}
                        />
                      </div>
                    ))}
                  </>
                </div>
              </div>
              {/* X AND Y INPUTS */}
              <div className="row mt-4 justify-content-around mx-auto">
                <div className="col-lg-5">
                  <InputGroup className="input-group-sm mb-3">
                    <InputGroup.Text className="input-group-text-wrapper">
                      X:
                    </InputGroup.Text>
                    <FormControl
                      aria-label="X input value"
                      aria-describedby="inputGroup-sizing-sm"
                      className="text-input-wrapper"
                    ></FormControl>
                  </InputGroup>
                </div>
                <div className="col-lg-5">
                  <InputGroup className="input-group-sm mb-3">
                    <InputGroup.Text className="input-group-text-wrapper">
                      Y:
                    </InputGroup.Text>
                    <FormControl
                      aria-label="Y input value"
                      aria-describedby="inputGroup-sizing-sm"
                      className="text-input-wrapper"
                    ></FormControl>
                  </InputGroup>
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
