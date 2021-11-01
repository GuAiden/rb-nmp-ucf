import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

type SummaryFormProps = {
  onFormChange: (form: string) => void;
};

const SummaryForm: React.FunctionComponent<SummaryFormProps> = ({
  onFormChange,
}) => (
  <React.Fragment>
    <Container>
      <p className="text-light">Hello summary page</p>
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
