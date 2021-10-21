import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Input } from '../Input_Types';
import './Input_Cards.css';

type InputCardsProps = {
  inputList: Input[];
};

const InputCards: React.FunctionComponent<InputCardsProps> = ({
  inputList,
}: InputCardsProps) => (
  <Container className="p-5">
    <Row md={3} className="g-5 justify-content-start text-left">
      {inputList.map((_, idx) => (
        <Col>
          <Card bg="secondary" className="card-wrapper">
            <Card.Body>
              <Row>
                <text className="card-text">Channel Name</text>
              </Row>
              <Row>
                <text className="input-text">{inputList[idx].channelName}</text>
              </Row>
              <Row className="pt-2">
                <Col>
                  <text className="card-text">Channel Number</text>
                  <text className="input-text">
                    {inputList[idx].channelNumber}
                  </text>
                </Col>
                <Col>
                  <text className="card-text">Units</text>
                  <text className="input-text">{inputList[idx].units}</text>
                </Col>
              </Row>
              {inputList[idx].conversion && (
                <Row className="pt-2">
                  <Col>
                    <text className="card-text">Conversion x:</text>
                    <text className="input-text">{inputList[idx].x}</text>
                  </Col>
                  <Col>
                    <text className="card-text">Conversion y:</text>
                    <text className="input-text">{inputList[idx].y}</text>
                  </Col>
                </Row>
              )}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default InputCards;
