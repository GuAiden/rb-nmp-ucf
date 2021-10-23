import React, { useState } from 'react';
import { FirmwareState, Input } from './inputTypes';
import InputForm from './InputForm.tsx';

/**
 * @returns Top level functional component for input, output and server form pages
 */
const Forms: React.FunctionComponent = () => {
  const [state, setState] = useState<FirmwareState>({} as FirmwareState);

  const handleInputChange = (userInputs: Input[]): void => {
    setState({ ...state, inputs: userInputs });
    console.log(state.inputs);
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

  return (
    <div>
      <InputForm onInputChange={handleInputChange} />
    </div>
  );
};

export default Forms;
