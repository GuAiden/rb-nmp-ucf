import React, { useState } from 'react';
import { FirmwareState, Input } from './inputTypes';
import InputForm from './InputForm.tsx';

const Forms: React.FunctionComponent = () => {
  const [state, setState] = useState<FirmwareState>(Object);

  function handleInputChange(userInputs: Input[]): void {
    setState({ ...state, inputs: userInputs });
  }

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
