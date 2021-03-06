import React, { useState } from 'react';
import {
  Button,
  FormControl,
  Modal,
  Popover,
  OverlayTrigger,
  Form,
  InputGroup,
} from 'react-bootstrap';
import { Input } from '../Input_Types';
import './Edit_Input_Modal.css';
// import edit_icon from '../../../assets/edit_icon.png';

type EditInputModalProps = {
  inputList: Input[];
  index: number;
  onInputEdit: (userInput: Input, idx: number) => void;
};

const EditInputModal: React.FunctionComponent<EditInputModalProps> = ({
  inputList,
  index,
  onInputEdit,
}: EditInputModalProps) => {
  const currentInput: Input = { ...inputList[index] };
  const [show, setShow] = useState(false);
  const [input, setInput] = useState<Input>(currentInput);

  /**
   * Modal open and close handlers
   */
  const handleClose = (): void => {
    setShow(false);
    setInput(currentInput);
  };

  const handleShow = (): void => {
    setShow(true);
    console.log(input);
  };

  const isValidInput = (): boolean => {
    // Validate channelNumber uniqueness
    if (
      inputList.some(
        (savedInput) =>
          savedInput.channelNumber === input.channelNumber &&
          input.channelNumber !== currentInput.channelNumber,
      )
    ) {
      return false;
    }

    // Validate existence of channel number, name and output
    // Might want to validate data integrity as well later
    if (
      input.channelName === '' ||
      Number.isNaN(input.channelNumber) ||
      input.channelNumber < 0 ||
      input.units === ''
    ) {
      return false;
    }
    return true;
  };

  // CreateInputModal add button handler
  const handleInputEdit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (!isValidInput()) {
      e.preventDefault();
      return;
    }
    onInputEdit(input, index);
    setShow(false);
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
    setInput({ ...input, output: !input.output });
  };

  const onConversionChange = (): void => {
    if (input.conversion === true) {
      setInput({
        ...input,
        conversion: !input.conversion,
        x: undefined,
        y: undefined,
      });
    } else {
      setInput({ ...input, conversion: !input.conversion });
    }
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
  const DangerEditButton: React.FunctionComponent = () => (
    <OverlayTrigger
      trigger="click"
      placement="left"
      overlay={invalidInputPopover}
    >
      <Button
        variant="danger"
        size="lg"
        className="border rounded-0 modal-add-wrapper px-5"
        id="danger-add-button"
      >
        Edit
      </Button>
    </OverlayTrigger>
  );

  // Button for when a successful input can be added
  const EditButton: React.FunctionComponent = () => (
    <Button
      variant="secondary"
      size="lg"
      onClick={(e): void => handleInputEdit(e)}
      className="border rounded-0 modal-add-wrapper px-5"
      id="add-button"
    >
      Edit
    </Button>
  );

  return (
    <React.Fragment>
      <div className="float-left">
        <Button
          className="rounded-0 button-clear border px-3 py-1"
          variant="secondary"
          onClick={handleShow}
        >
          <p className="my-auto card-button-text">Edit</p>
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
                    value={input.channelName}
                    onChange={(e): void => onChannelNameChange(e)}
                    maxLength={20}
                  />
                </Form.Group>
                <Form.Group
                  className="mt-3 text-light"
                  controlId="channelNumber.ControlInput"
                >
                  <Form.Label>Channel Number</Form.Label>
                  <Form.Control
                    type="number"
                    className="text-input-wrapper"
                    value={input.channelNumber}
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
                      value={input.units}
                      maxLength={10}
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
                          checked={input.output}
                          onChange={(): void => onOutputChange()}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label="Conversion?"
                          name="group1"
                          type={type}
                          checked={input.conversion}
                          onChange={(): void => onConversionChange()}
                          id={`inline-${type}-2`}
                        />
                      </div>
                    ))}
                  </>
                </div>
              </div>
              {/* X AND Y INPUTS */}
              {input.conversion && (
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
                        value={input.x}
                        maxLength={12}
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
                        value={input.y}
                        maxLength={12}
                      ></FormControl>
                    </InputGroup>
                  </div>
                </div>
              )}
              {/* ADD OR SAVE MODAL BUTTONS */}
              <div className="row justify-content-end mt-4">
                <div className="col-3">
                  {isValidInput() ? <EditButton /> : <DangerEditButton />}
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

export default EditInputModal;
