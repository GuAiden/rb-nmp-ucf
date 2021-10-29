import React, { useState } from 'react';
import {
  Button,
  Form,
  FormControl,
  InputGroup,
  Modal,
  Popover,
  OverlayTrigger,
} from 'react-bootstrap';
import { Input } from '../Input_Types';
import './index.css';

type CreateInputModalProps = {
  onAddInput: (userInputs: Input) => void;
  inputList: Input[];
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
  inputList,
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
    setInput(initialState);
  };

  const isValidInput = (): boolean => {
    // Validate channelNumber uniqueness
    if (
      inputList.some(
        (savedInput) => savedInput.channelNumber === input.channelNumber,
      )
    ) {
      return false;
    }

    // Validate existence of channel number, name and output
    // Might want to validate data integrity as well later
    if (
      typeof input.channelName === 'undefined' ||
      typeof input.channelNumber === 'undefined' ||
      typeof input.units === 'undefined'
    ) {
      return false;
    }
    return true;
  };

  // CreateInputModal add button handler
  const handleAddInput = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (!isValidInput()) {
      e.preventDefault();
      return;
    }

    onAddInput(input);
    setShow(false);
    setOutput(false);
    setConversion(false);
    setInput(initialState);
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

  // Popover to let user know about invalid input
  const invalidInputPopover = (
    <Popover id="popover-basic">
      <Popover.Body className="my-auto">
        Please enter a valid:
        <ul className="list-p-0">
          <li>
            <b>Name</b>
          </li>
          <li>
            <b>Number</b>
          </li>
          <li>
            <b>Ouput</b>
          </li>
        </ul>
      </Popover.Body>
    </Popover>
  );

  // Button for when user input is still invalid and untrustworthy
  const DangerAddButton: React.FunctionComponent = () => (
    <OverlayTrigger
      trigger="click"
      placement="left"
      overlay={invalidInputPopover}
    >
      <Button
        variant="danger"
        size="lg"
        onClick={(e): void => handleAddInput(e)}
        className="border rounded-0 modal-add-wrapper px-5"
        id="danger-add-button"
      >
        Add
      </Button>
    </OverlayTrigger>
  );

  // Button for when a successful input can be added
  const AddButton: React.FunctionComponent = () => (
    <Button
      variant="secondary"
      size="lg"
      onClick={(e): void => handleAddInput(e)}
      className="border rounded-0 modal-add-wrapper px-5"
      id="add-button"
    >
      Add
    </Button>
  );

  return (
    <React.Fragment>
      <div className="float-left">
        <Button
          className="rounded-0 px-4 py-2 button-text margin-left"
          variant="primary"
          onClick={handleShow}
        >
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
              {isOutput && isConversion && (
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
              )}
              {/* ADD OR SAVE MODAL BUTTONS */}
              <div className="row justify-content-end mt-4">
                <div className="col-3">
                  {isValidInput() ? <AddButton /> : <DangerAddButton />}
                </div>
                <div className="col-3">
                  <Button
                    className="rounded-0 px-5"
                    variant="primary"
                    size="lg"
                    onClick={handleClose}
                  >
                    Close
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
