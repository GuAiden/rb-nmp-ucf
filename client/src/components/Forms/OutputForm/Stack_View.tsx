import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Input, Output } from '../Input_Types';
import EditOutputModal from './Edit_Output_Modal';
import './index.css';

type StackViewProps = {
  outputList: Output[];
  inputList: Input[];
  onOutputDelete: (channelNumber: number) => void;
  onOutputEdit: (userOutput: Output, idx: number) => void;
};

const StackView: React.FunctionComponent<StackViewProps> = ({
  outputList,
  inputList,
  onOutputDelete,
  onOutputEdit,
}: StackViewProps) => (
  <Container className="px-5 py-4">
    <Container className="px-5">
      <Row className="justify-content-start mb-1">
        <Col>
          <p className="stackview-header float-start my-auto ms-1 px-4">
            Channel Number
          </p>
        </Col>
      </Row>
      {outputList.map((output, idx) => (
        <Row
          className="justify-content-between me-1 ms-1 mt-3 bg"
          id={idx % 2 === 0 ? 'dark-grey' : 'grey'}
        >
          <Col>
            <p className="text-light float-start my-auto px-5 py-3">
              {output.channelNumber}
            </p>
          </Col>
          <Col md={1} className="float-end my-auto">
            <EditOutputModal
              onOutputEdit={onOutputEdit}
              outputList={outputList}
              index={idx}
              inputList={inputList}
            />
          </Col>
          <Col md={1} className="float-end my-auto me-3">
            <Button
              className="rounded-0 button-clear border px-3 py-1"
              variant="danger"
              onClick={(): void =>
                onOutputDelete(outputList[idx].channelNumber)
              }
            >
              <p className="my-auto card-button-text">Delete</p>
            </Button>
          </Col>
        </Row>
      ))}
    </Container>
  </Container>
);

export default StackView;
