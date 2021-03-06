import React from 'react';
import './index.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FirmwareState } from '../Input_Types';

type SummaryFormProps = {
  onFormChange: (form: string) => void;
  summary: FirmwareState;
};

const SummaryForm: React.FunctionComponent<SummaryFormProps> = ({
  onFormChange,
  summary,
}) => (
  <React.Fragment>
    <Container className="container-color">
      <Container className="pt-4">
        <Row className="justify-content-between">
          <Col md={3} className="my-auto">
            <Button className="rounded-0 px-4 py-2 button-text margin-left">
              Download
            </Button>
          </Col>
          <Col md={3} className="my-auto">
            <Button className="rounded-0 ms-5 me-3 px-3 py-1 switch-view">
              <p className="my-auto">T</p>
            </Button>
            <Button className="rounded-0 px-3 py-1 switch-view">
              <p className="my-auto">&#123;&#125;</p>
            </Button>
          </Col>
        </Row>
        <Row className="pe-2">
          <Col className="px-5 mt-4 mb-4">
            <div className="scroll-view ps-5 pe-4 py-0">
              <p className="ms-1 px-5 py-4 text-light text-start overflow-auto summary-bg">
                <pre id="json">{JSON.stringify(summary, null, 2)}</pre>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
    <Container>
      <Row className="justify-content-between gx-0">
        <Col>
          <Button
            variant="primary"
            className="rounded-0 mt-5 py-2 px-5 float-start button-clear border"
            onClick={(): void => onFormChange('ServerForm')}
          >
            <p className="px-2 my-auto button-next">Back</p>
          </Button>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default SummaryForm;
