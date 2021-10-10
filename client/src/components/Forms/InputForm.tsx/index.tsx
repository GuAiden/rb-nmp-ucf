import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import CreateInputModal from './createinputmodal';
import gridviewicon from '../../../assets/gridviewicon.png';
import stackedviewicon from '../../../assets/stackedviewicon.png';
import './index.css';

const InputForm: React.FunctionComponent = () => {
  const [state, setState] = useState(0);

  return (
    <React.Fragment>
      <div className="container bg-dark">
        <div className="container bg-dark pt-4">
          <div className="row justify-content-between">
            <div className="col-4 my-auto">
              <CreateInputModal />
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
        </div>
        <p>Hello world {state}</p>
        <Button onClick={(): void => setState(1)} />
      </div>
    </React.Fragment>
  );
};

export default InputForm;
