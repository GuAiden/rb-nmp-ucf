import React, { useState } from 'react';
import './menuswitcher.css';
/**
 * Basic anchor group to switch between components
 * @returns Functional component to switch between input/output menus
 */
const MenuSwitcher: React.FunctionComponent = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="container border border-primary mt-5 bg-primary">
      <div className="row">
        <div className="col-sm col-wrapper my-auto">
          <a
            href="#"
            className={count === 1 ? 'a-selected' : 'a-unselected'}
            onClick={(): void => setCount(1)}
          >
            Inputs
          </a>
        </div>
        <div className="col-sm col-wrapper my-auto">
          <hr className="hr-wrapper" />
        </div>
        <div className="col-sm col-wrapper my-auto">
          <a
            href="#"
            className={count === 2 ? 'a-selected' : 'a-unselected'}
            onClick={(): void => setCount(2)}
          >
            Outputs
          </a>
        </div>
        <div className="col-sm col-wrapper my-auto">
          <hr className="hr-wrapper" />
        </div>
        <div className="col-sm col-wrapper my-auto">
          <a
            href="#"
            className={count === 3 ? 'a-selected' : 'a-unselected'}
            onClick={(): void => setCount(3)}
          >
            Server
          </a>
        </div>
        <div className="col-sm col-wrapper my-auto">
          <hr className="hr-wrapper" />
        </div>
        <div className="col-sm col-wrapper my-auto">
          <a
            href="#"
            className={count === 4 ? 'a-selected' : 'a-unselected'}
            onClick={(): void => setCount(4)}
          >
            Summary
          </a>
        </div>
      </div>
    </div>
  );
};
export default MenuSwitcher;
