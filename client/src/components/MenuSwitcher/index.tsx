import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './menuswitcher.css';
/**
 * Basic anchor group to switch between components
 * @returns Functional component to switch between input/output/server menus
 */
const MenuSwitcher: React.FunctionComponent = () => {
  const [count, setCount] = useState(1);
  return (
    <Container className="container-blue border border-primary mt-5">
      <Row className="justify-content-md-center mt-4 mb-4">
        <Col md="2">
          <p> </p>
        </Col>
        <Col md="auto" className="col-wrapper my-auto">
          <a
            href="#"
            className={count === 1 ? 'a-selected' : 'a-unselected'}
            onClick={(): void => setCount(1)}
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
            className={count === 2 ? 'a-selected' : 'a-unselected'}
            onClick={(): void => setCount(2)}
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
            className={count === 3 ? 'a-selected' : 'a-unselected'}
            onClick={(): void => setCount(3)}
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
            className={count === 4 ? 'a-selected' : 'a-unselected'}
            onClick={(): void => setCount(4)}
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
};
export default MenuSwitcher;
