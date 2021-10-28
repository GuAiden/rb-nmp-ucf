import React from 'react';
import { Container, Row, Col, Form, FormControl } from 'react-bootstrap';
import { ServerInput } from '../Input_Types';
import './index.css';

type ServerFormProps = {
  onServerChange: (inputServer: ServerInput) => void;
  server: ServerInput;
};

const ServerForm: React.FunctionComponent<ServerFormProps> = ({
  onServerChange,
  server,
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
      <Row className="justify-content-md-center">
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
      <Row>
        <p> </p>
      </Row>
    </Container>
  );
};

export default ServerForm;
