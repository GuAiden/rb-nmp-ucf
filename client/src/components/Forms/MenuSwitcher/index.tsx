import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
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
  <Container className="container-blue border border-primary mt-5">
    <Row className="justify-content-md-center mt-4 mb-4">
      <Col md="2">
        <p> </p>
      </Col>
      <Col md="auto" className="col-wrapper my-auto">
        <a
          href="#"
          className={form === 'InputForm' ? 'a-selected' : 'a-unselected'}
          onClick={(): void => onFormChange('InputForm')}
        >
          Inputs
        </a>
      </Col>
      <Col className="col-wrapper my-auto">
        <hr className="hr-wrapper" />
      </Col>
      <Col md="auto" className="col-wrapper my-auto">
        <a
          href="#"
          className={form === 'OutputForm' ? 'a-selected' : 'a-unselected'}
          onClick={(): void => onFormChange('OutputForm')}
        >
          Outputs
        </a>
      </Col>
      <Col className="col-wrapper my-auto">
        <hr className="hr-wrapper" />
      </Col>
      <Col md="auto" className="col-wrapper my-auto">
        <a
          href="#"
          className={form === 'ServerForm' ? 'a-selected' : 'a-unselected'}
          onClick={(): void => onFormChange('ServerForm')}
        >
          Server
        </a>
      </Col>
      <Col className="col-wrapper my-auto">
        <hr className="hr-wrapper" />
      </Col>
      <Col md="auto" className="col-wrapper my-auto">
        <a
          href="#"
          className={form === 'SummaryForm' ? 'a-selected' : 'a-unselected'}
          onClick={(): void => onFormChange('SummaryForm')}
        >
          Summary
        </a>
      </Col>
      <Col md="2">
        <p> </p>
      </Col>
    </Row>
  </Container>
);
export default MenuSwitcher;
