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
  const [form, setForm] = useState(1);

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

  const handleFormChange = (num: number): void => {
    setForm(num);
    console.log(state);
  };

  return (
    <React.Fragment>
      <MenuSwitcher onFormChange={handleFormChange} count={form} />
      {form === 1 && (
        <InputForm onInputChange={handleInputChange} inputList={state.inputs} />
      )}
      {form === 2 && <OutputForm />}
      {form === 3 && <ServerForm />}
      {form === 4 && <SummaryForm />}
    </React.Fragment>
  );
};

export default Forms;
