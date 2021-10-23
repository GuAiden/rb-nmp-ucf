import React, { useState } from 'react';
import { Button, Form, FormControl, InputGroup, Modal } from 'react-bootstrap';
import { Input } from '../Input_Types';
import './index.css';

type CreateInputModalProps = {
  onAddInput: (userInputs: Input) => void;
};

const initialState = {
  output: false,
  conversion: false,
} as Input;

/**
 * @returns A modal component that opens to handle form input for the 'inputs' page
 */
const CreateInputModal: React.FunctionComponent<CreateInputModalProps> = ({
  onAddInput,
}: CreateInputModalProps) => {
  /**
   * showState -> responsible for opening and closing modal
   * inputState -> responsible for storing form inputs
   * isConversionState -> responsible for handling conversion checkbox state
   * isOutputState -> responsible for handling output checkbox state
   */
  const [show, setShow] = useState(false);
  const [input, setInput] = useState<Input>(initialState);
  const [isConversion, setConversion] = useState<boolean>(false);
  const [isOutput, setOutput] = useState<boolean>(false);

  // Modal open and close handlers
  const handleShow = (): void => {
    setShow(true);
  };

  const handleClose = (): void => {
    setShow(false);
    setConversion(false);
    setOutput(false);
  };

  // CreateInputModal add button handler
  const handleAddInput = (): void => {
    onAddInput(input);
    setShow(false);
    setOutput(false);
    setConversion(false);
    setInput(initialState);
    console.log(input);
  };

  // onChange handlers for form inputs
  const onChannelNameChange = (
    e: Parameters<
      NonNullable<React.ComponentProps<typeof FormControl>['onChange']>
    >[0],
  ): void => {
    setInput({ ...input, channelName: e.currentTarget.value as string });
  };

  const onChannelNumberChange = (
    e: Parameters<
      NonNullable<React.ComponentProps<typeof FormControl>['onChange']>
    >[0],
  ): void => {
    setInput({ ...input, channelNumber: parseInt(e.currentTarget.value, 10) });
  };

  const onUnitsChange = (
    e: Parameters<
      NonNullable<React.ComponentProps<typeof FormControl>['onChange']>
    >[0],
  ): void => {
    setInput({ ...input, units: e.currentTarget.value as string });
  };

  const onXChange = (
    e: Parameters<
      NonNullable<React.ComponentProps<typeof FormControl>['onChange']>
    >[0],
  ): void => {
    setInput({ ...input, x: parseInt(e.currentTarget.value, 10) });
  };

  const onYChange = (
    e: Parameters<
      NonNullable<React.ComponentProps<typeof FormControl>['onChange']>
    >[0],
  ): void => {
    setInput({ ...input, y: parseInt(e.currentTarget.value, 10) });
  };

  const onOutputChange = (): void => {
    setOutput(!isOutput);
    setInput({ ...input, output: !isOutput });
  };

  const onConversionChange = (): void => {
    setConversion(!isConversion);
    setInput({ ...input, conversion: !isConversion });
  };

  return (
    <React.Fragment>
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
                  <Form.Control
                    type="text"
                    className="text-input-wrapper"
                    onChange={(e): void => onChannelNameChange(e)}
                  />
                </Form.Group>
                <Form.Group
                  className="mt-3 text-light"
                  controlId="channelNumber.ControlInput"
                >
                  <Form.Label>Channel Number</Form.Label>
                  <Form.Control
                    type="text"
                    className="text-input-wrapper"
                    onChange={(e): void => onChannelNumberChange(e)}
                  />
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
                      onChange={(e): void => onUnitsChange(e)}
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
                          checked={isOutput}
                          onChange={(): void => onOutputChange()}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label="Conversion?"
                          name="group1"
                          type={type}
                          checked={isConversion}
                          onChange={(): void => onConversionChange()}
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
                      onChange={(e): void => onXChange(e)}
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
                      onChange={(e): void => onYChange(e)}
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
                    onClick={(): void => handleAddInput()}
                    className="modal-add-wrapper"
                    id="add-button"
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
    </React.Fragment>
  );
};

export default CreateInputModal;
