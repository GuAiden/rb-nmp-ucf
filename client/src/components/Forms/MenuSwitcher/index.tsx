import React from 'react';
import './menuswitcher.css';

type MenuSwitcherProps = {
  onFormChange: (form: string) => void;
  form: string;
};

/**
 * Basic anchor group to switch between components
 * @returns Functional component to switch between input/output/server menus
 */
const MenuSwitcher: React.FunctionComponent<MenuSwitcherProps> = ({
  onFormChange,
  form,
}: MenuSwitcherProps) => (
  <div className="container border border-primary mt-5 bg-primary">
    <div className="row">
      <div className="col-sm col-wrapper my-auto">
        <a
          href="#"
          className={form === 'InputForm' ? 'a-selected' : 'a-unselected'}
          onClick={(): void => onFormChange('InputForm')}
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
          className={form === 'OutputForm' ? 'a-selected' : 'a-unselected'}
          onClick={(): void => onFormChange('OutputForm')}
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
          className={form === 'ServerForm' ? 'a-selected' : 'a-unselected'}
          onClick={(): void => onFormChange('ServerForm')}
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
          className={form === 'SummaryForm' ? 'a-selected' : 'a-unselected'}
          onClick={(): void => onFormChange('SummaryForm')}
        >
          Summary
        </a>
      </div>
    </div>
  </div>
);
export default MenuSwitcher;
