import React, { useState } from 'react';
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
  const handleInputChange = (userInputs: Input): void => {
    setState({ ...state, inputs: state.inputs.concat(userInputs) });
  };

  /**
   * Uncomment when components have been made, pass down as prop to relevant component
   */
  // function handleOutputChange(userOutputs: Output[]): void {
  //   setState({ ...state, outputs: userOutputs });
  // }

  // function handleServerChange(inputServer: ServerInput): void {
  //   setState({ ...state, server: inputServer });
  // }

  /**
   * Changes the form to determine what component to show
   * @param num provided component
   */
  const handleFormChange = (newForm: string): void => {
    setForm(newForm);
    console.log(state);
  };

  return (
    <React.Fragment>
      <MenuSwitcher onFormChange={handleFormChange} form={form} />
      {form === 'InputForm' && (
        <InputForm onInputChange={handleInputChange} inputList={state.inputs} />
      )}
      {form === 'OutputForm' && <OutputForm />}
      {form === 'ServerForm' && <ServerForm />}
      {form === 'SummaryForm' && <SummaryForm />}
    </React.Fragment>
  );
};

export default Forms;
