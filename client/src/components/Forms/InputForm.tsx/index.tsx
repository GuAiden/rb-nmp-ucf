import React, { useState } from 'react';
import CreateInputModal from './createinputmodal';
import gridviewicon from '../../../assets/gridviewicon.png';
import stackedviewicon from '../../../assets/stackedviewicon.png';
import './index.css';
import { Input } from '../inputTypes';

type InputFormProps = {
  onInputChange: (userInputs: Input[]) => void;
};

const InputForm = ({ onInputChange }: InputFormProps): JSX.Element => {
  const [inputList, setInputList] = useState<Input[]>([] as Input[]);

  const handleAddInput = (userInput: Input): void => {
    setInputList(inputList.concat(userInput));
    onInputChange(inputList);
  };

  return (
    <React.Fragment>
      <div className="container bg-dark">
        <div className="container bg-dark pt-4">
          <div className="row justify-content-between">
            <div className="col-4 my-auto">
              <CreateInputModal onAddInput={handleAddInput} />
            </div>
            <div className="col-4 my-auto">
              <button className="icon-wrapper">
                <img
                  src={gridviewicon}
                  alt="gridView"
                  onClick={(): void => console.log('GridView pressed')}
                />
              </button>
              <button className="icon-wrapper">
                <img
                  src={stackedviewicon}
                  alt="stackedView"
                  onClick={(): void => console.log('StackedView pressed')}
                />
              </button>
            </div>
          </div>
          <div className="row">
            {inputList.map((d, idx) => (
              <li className="text-light" key={idx}>
                {d.channelName}
              </li>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InputForm;
