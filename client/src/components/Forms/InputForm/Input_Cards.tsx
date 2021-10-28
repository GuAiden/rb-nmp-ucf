import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Input } from '../Input_Types';
import EditInputModal from './Edit_Input_Modal';
import './Input_Cards.css';

type InputCardsProps = {
  inputList: Input[];
};

const InputCards: React.FunctionComponent<InputCardsProps> = ({
  inputList,
}: InputCardsProps) => (
  <Container className="px-5 py-4">
    {/*
    TODO: Find a way to add additional padding without
    nesting containers
    */}
    <Container className="px-5">
      <Row md={3} className="g-5 justify-content-left">
        {inputList.map((_, idx) => (
          <Col>
            <Card className="card-wrapper rounded-0">
              <Card.Body className="card-body">
                <Row>
                  <text className="card-text">Channel Name</text>
                </Row>
                <Row>
                  <text className="input-text">
                    {inputList[idx].channelName}
                  </text>
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
                {inputList[idx].conversion ? (
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
                ) : (
                  <Row className="py-3 mt-4"></Row>
                )}
                <Row className="justify-content-end">
                  <Col md={{ offset: 6 }}>
                    <EditInputModal />
                  </Col>
                  <Col>
                    <EditInputModal />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </Container>
);

export default InputCards;
