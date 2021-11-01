import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { ServerInput } from '../Input_Types';
import './index.css';

type ServerFormProps = {
  onServerChange: (inputServer: ServerInput) => void;
  server: ServerInput;
  onFormChange: (form: string) => void;
};

const ServerForm: React.FunctionComponent<ServerFormProps> = ({
  onServerChange,
  server,
  onFormChange,
}: ServerFormProps) => {
  const handleAddressChange = (
    e: Parameters<
      NonNullable<React.ComponentProps<typeof FormControl>['onChange']>
    >[0],
  ): void => {
    onServerChange({ ...server, address: e.currentTarget.value as string });
  };

  const handleUDPChange = (
    e: Parameters<
      NonNullable<React.ComponentProps<typeof FormControl>['onChange']>
    >[0],
  ): void => {
    onServerChange({ ...server, port: parseInt(e.currentTarget.value, 10) });
  };

  const handleWSChange = (
    e: Parameters<
      NonNullable<React.ComponentProps<typeof FormControl>['onChange']>
    >[0],
  ): void => {
    onServerChange({ ...server, wsPort: parseInt(e.currentTarget.value, 10) });
  };

  return (
    <React.Fragment>
      <Container className="container-color">
        <Row>
          <Col md={5}>
            <h3 className="server-header mt-4"> Server </h3>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={7}>
            <Form.Group className="mt-3 text-light" controlId="server.address">
              <Form.Label className="form-label-text">Address</Form.Label>
              <Form.Control
                type="text"
                value={server.address}
                className="text-input-wrapper"
                onChange={(e): void => handleAddressChange(e)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-md-center mb-5">
          <Col md={3}>
            <Form.Group className="mt-3 text-light" controlId="server.UDPPort">
              <Form.Label className="form-label-text">UDP Port</Form.Label>
              <Form.Control
                type="number"
                value={server.port}
                className="text-input-wrapper"
                onChange={(e): void => handleUDPChange(e)}
              />
            </Form.Group>
          </Col>
          <Col md={1}></Col>
          <Col md={3}>
            <Form.Group className="mt-3 text-light" controlId="server.WSPort">
              <Form.Label className="form-label-text">WS Port</Form.Label>
              <Form.Control
                type="number"
                value={server.wsPort}
                className="text-input-wrapper mb-5"
                onChange={(e): void => handleWSChange(e)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-5 py-5">
          <p> </p>
        </Row>
        <Row className="py-5">
          <p> </p>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-between gx-0">
          <Col>
            <Button
              variant="primary"
              className="rounded-0 mt-5 py-2 px-5 float-start button-clear border"
              onClick={(): void => onFormChange('OutputForm')}
            >
              <p className="px-2 my-auto button-next">Back</p>
            </Button>
          </Col>
          <Col>
            <Button
              variant="primary"
              className="rounded-0 mt-5 py-2 px-5 float-end"
              onClick={(): void => onFormChange('SummaryForm')}
            >
              <p className="px-2 my-auto button-next">Next</p>
            </Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default ServerForm;
