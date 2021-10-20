import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Input } from '../Input_Types';

type InputCardsProps = {
  inputList: Input[];
};

const InputCards: React.FunctionComponent<InputCardsProps> = ({
  inputList,
}: InputCardsProps) => (
  <Container className="p-5">
    <Row md={3} className="g-5">
      {inputList.map(() => (
        <Col className="text-left">
          <Card bg="secondary">
            <text className="text-left">hello</text>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default InputCards;
