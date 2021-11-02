import React, { useEffect, useState } from 'react';
import { FirmwareState, Input, Output, ServerInput } from './Input_Types';
import InputForm from './InputForm';
import OutputForm from './OutputForm';
import ServerForm from './ServerForm';
import SummaryForm from './SummaryForm';
import MenuSwitcher from './MenuSwitcher';

const initialFirmwareState: FirmwareState = {
  server: {} as ServerInput,
  inputs: [] as Input[],
  outputs: [] as Output[],
};

/**
 * @returns Top level functional component for input, output and server form pages
 */
const Forms: React.FunctionComponent = () => {
  const [state, setState] = useState<FirmwareState>(initialFirmwareState);
  const [form, setForm] = useState('InputForm');

  /**
   * Handler to append input to list from create input modal
   * @param userInputs created input
   */
  const handleInputChange = (userInput: Input): void => {
    setState({ ...state, inputs: state.inputs.concat(userInput) });
  };

  /**
   * Handler to delete an input from list
   * We can use the channelNumber to delete from the list since it acts
   * as a unique key for all inputs
   * @param channelNumber number of input to be deleted
   */
  const handleInputDeletion = (channelNumber: number): void => {
    setState({
      ...state,
      inputs: state.inputs.filter(
        (input) => input.channelNumber !== channelNumber,
      ),
      outputs: state.outputs.filter(
        (output) => output.channelNumber !== channelNumber,
      ),
    });
  };

  /**
   * Handler to edit input values
   * @param userInput New Input that will replace the input at index idx
   * @param idx Index of the input to be replaced
   */
  const handleInputEdit = (userInput: Input, idx: number): void => {
    // Make shallow copy of inputs
    const inputsCopy = [...state.inputs];
    let oldInput = { ...inputsCopy[idx] };
    oldInput = userInput;
    inputsCopy[idx] = oldInput;
    setState({ ...state, inputs: inputsCopy });
  };

  /**
   * Handler to append input to list from create input modal
   * @param userOutput created output
   */
  const handleOutputChange = (userOutput: Output): void => {
    setState({ ...state, outputs: state.outputs.concat(userOutput) });
  };

  const handleOutputDeletion = (channelNumber: number): void => {
    setState({
      ...state,
      outputs: state.outputs.filter(
        (output) => output.channelNumber !== channelNumber,
      ),
    });
  };

  const handleOutputEdit = (userOutput: Output, idx: number): void => {
    const outputsCopy = [...state.outputs];
    let oldOutput = { ...outputsCopy[idx] };
    oldOutput = userOutput;
    outputsCopy[idx] = oldOutput;
    setState({ ...state, outputs: outputsCopy });
  };

  const handleServerChange = (inputServer: ServerInput): void => {
    setState({ ...state, server: inputServer });
  };

  /**
   * Changes the form to determine what component to show
   * @param num provided component
   */
  const handleFormChange = (newForm: string): void => {
    setForm(newForm);
    console.log(state);
  };

  useEffect(() => {
    console.log(state.inputs);
  });

  return (
    <React.Fragment>
      <MenuSwitcher onFormChange={handleFormChange} form={form} />
      {form === 'InputForm' && (
        <InputForm
          onInputChange={handleInputChange}
          onInputDelete={handleInputDeletion}
          onInputEdit={handleInputEdit}
          inputList={state.inputs}
          onFormChange={handleFormChange}
        />
      )}
      {form === 'OutputForm' && (
        <OutputForm
          onOuputChange={handleOutputChange}
          onOutputDelete={handleOutputDeletion}
          onOutputEdit={handleOutputEdit}
          outputList={state.outputs}
          inputList={state.inputs}
          onFormChange={handleFormChange}
        />
      )}
      {form === 'ServerForm' && (
        <ServerForm
          onServerChange={handleServerChange}
          server={state.server}
          onFormChange={handleFormChange}
        />
      )}
      {form === 'SummaryForm' && (
        <SummaryForm onFormChange={handleFormChange} summary={state} />
      )}
    </React.Fragment>
  );
};

export default Forms;
