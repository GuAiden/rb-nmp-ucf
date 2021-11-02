import React, { useState } from 'react';
import {
  Button,
  Form,
  FormControl,
  InputGroup,
  Modal,
  Popover,
  OverlayTrigger,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';
import { Input, Output } from '../Input_Types';
import './index.css';

type CreateOuputModalProps = {
  onAddOutput: (userOutput: Output) => void;
  outputList: Output[];
  inputList: Input[];
};

const initialState = {
  channelName: '',
  channelNumber: NaN,
  units: '',
  output: false,
  conversion: false,
} as Output;

/**
 * @returns A modal component that opens to handle form input for the 'inputs' page
 */
const CreateOuputModal: React.FunctionComponent<CreateOuputModalProps> = ({
  onAddOutput,
  outputList,
  inputList,
}: CreateOuputModalProps) => {
  /**
   * showState -> responsible for opening and closing modal
   * outputState -> responsible for storing form inputs
   */
  const [show, setShow] = useState(false);
  const [output, setOutput] = useState<Output>(initialState);

  // Modal open and close handlers
  const handleShow = (): void => {
    setShow(true);
  };

  const handleClose = (): void => {
    setShow(false);
    setOutput(initialState);
  };

  const isValidOutput = (): boolean => {
    // Validate channelNumber uniqueness
    if (
      outputList.some(
        (savedOutput) => savedOutput.channelNumber === output.channelNumber,
      )
    ) {
      return false;
    }

    // Validate existence of channel number, name and output
    // Might want to validate data integrity as well later
    if (
      output.channelName === '' ||
      Number.isNaN(output.channelNumber) ||
      output.channelNumber < 0 ||
      output.units === ''
    ) {
      return false;
    }
    return true;
  };

  // CreateOuputModal add button handler
  const handleAddOutput = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (!isValidOutput()) {
      e.preventDefault();
      return;
    }

    onAddOutput(output);
    setShow(false);
    setOutput(initialState);
  };

  // onChange handlers for form inputs
  const onChannelNameChange = (
    e: Parameters<
      NonNullable<React.ComponentProps<typeof FormControl>['onChange']>
    >[0],
  ): void => {
    setOutput({ ...output, channelName: e.currentTarget.value as string });
  };

  const onChannelNumberChange = (channelNum: number): void => {
    setOutput({
      ...output,
      channelNumber: channelNum,
    });
  };

  const onUnitsChange = (
    e: Parameters<
      NonNullable<React.ComponentProps<typeof FormControl>['onChange']>
    >[0],
  ): void => {
    setOutput({ ...output, units: e.currentTarget.value as string });
  };

  const onXChange = (
    e: Parameters<
      NonNullable<React.ComponentProps<typeof FormControl>['onChange']>
    >[0],
  ): void => {
    setOutput({ ...output, x: parseInt(e.currentTarget.value, 10) });
  };

  const onYChange = (
    e: Parameters<
      NonNullable<React.ComponentProps<typeof FormControl>['onChange']>
    >[0],
  ): void => {
    setOutput({ ...output, y: parseInt(e.currentTarget.value, 10) });
  };

  const onOutputChange = (): void => {
    setOutput({ ...output, output: !output.output });
  };

  const onConversionChange = (): void => {
    if (output.conversion === true) {
      setOutput({
        ...output,
        conversion: !output.conversion,
        x: undefined,
        y: undefined,
      });
    } else {
      setOutput({ ...output, conversion: !output.conversion });
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
  const DangerAddButton: React.FunctionComponent = () => (
    <OverlayTrigger
      trigger="click"
      placement="left"
      overlay={invalidInputPopover}
    >
      <Button
        variant="danger"
        size="lg"
        onClick={(e): void => handleAddOutput(e)}
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
      onClick={(e): void => handleAddOutput(e)}
      className="border rounded-0 modal-add-wrapper px-5"
      id="add-button"
    >
      Add
    </Button>
  );

  const ChannelNumberOptions: React.FunctionComponent = () => (
    <DropdownButton
      id="dropdown-channelNumbers"
      title={
        Number.isNaN(output.channelNumber)
          ? 'Channel Number'
          : output.channelNumber
      }
      variant="secondary"
      className="mt-4"
    >
      {inputList.map((input, idx) => (
        <Dropdown.Item
          as="button"
          onClick={(): void => onChannelNumberChange(input.channelNumber)}
        >
          {input.channelNumber}
        </Dropdown.Item>
      ))}
    </DropdownButton>
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
                  CREATE NEW OUTPUT
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
                    maxLength={20}
                  />
                </Form.Group>
                <ChannelNumberOptions />
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
                          checked={output.output}
                          onChange={(): void => onOutputChange()}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label="Conversion?"
                          name="group1"
                          type={type}
                          checked={output.conversion}
                          onChange={(): void => onConversionChange()}
                          id={`inline-${type}-2`}
                        />
                      </div>
                    ))}
                  </>
                </div>
              </div>
              {/* X AND Y INPUTS */}
              {output.conversion && (
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
                        maxLength={12}
                      ></FormControl>
                    </InputGroup>
                  </div>
                </div>
              )}
              {/* ADD OR SAVE MODAL BUTTONS */}
              <div className="row justify-content-end mt-4">
                <div className="col-3">
                  {isValidOutput() ? <AddButton /> : <DangerAddButton />}
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

export default CreateOuputModal;
