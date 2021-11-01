import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

type OutputFormProps = {
  onFormChange: (form: string) => void;
};

const OutputForm: React.FunctionComponent<OutputFormProps> = ({
  onFormChange,
}: OutputFormProps) => (
  <React.Fragment>
    <Container className="container-color">
      <p className="text-light">Hello Output page</p>
    </Container>
    <Container>
      <Row className="justify-content-between gx-0">
        <Col>
          <Button
            variant="primary"
            className="rounded-0 mt-5 py-2 px-5 float-start button-clear border"
            onClick={(): void => onFormChange('InputForm')}
          >
            <p className="px-2 my-auto button-next">Back</p>
          </Button>
        </Col>
        <Col>
          <Button
            variant="primary"
            className="rounded-0 mt-5 py-2 px-5 float-end"
            onClick={(): void => onFormChange('ServerForm')}
          >
            <p className="px-2 my-auto button-next">Next</p>
          </Button>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
);

export default OutputForm;
