import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import gridviewicon from '../../../assets/gridviewicon.png';
import stackedviewicon from '../../../assets/stackedviewicon.png';
import CreateOutputModal from './Create_Output_Modal';
import StackView from './Stack_View';
import { Input, Output } from '../Input_Types';

type OutputFormProps = {
  onOuputChange: (userOutput: Output) => void;
  onOutputDelete: (channelNum: number) => void;
  onOutputEdit: (userOutput: Output, idx: number) => void;
  outputList: Output[];
  inputList: Input[];
  onFormChange: (form: string) => void;
};

const OutputForm: React.FunctionComponent<OutputFormProps> = ({
  onOuputChange,
  onOutputDelete,
  onOutputEdit,
  outputList,
  inputList,
  onFormChange,
}: OutputFormProps) => (
  <React.Fragment>
    <Container className="container-color">
      <Container className="pt-4">
        <Row className="justify-content-between">
          <Col md={3} className="my-auto">
            <CreateOutputModal
              onAddOutput={onOuputChange}
              outputList={outputList}
              inputList={inputList}
            />
          </Col>
          <Col md={3} className="my-auto">
            <Button variant="outline-dark" className="icon-wrapper">
              <img
                src={gridviewicon}
                alt="gridView"
                onClick={(): void => console.log('GridView pressed')}
              />
            </Button>
            <Button variant="outline-dark" className="icon-wrapper">
              <img
                src={stackedviewicon}
                alt="stackedView"
                onClick={(): void => console.log('StackedView pressed')}
              />
            </Button>
          </Col>
        </Row>
      </Container>
      <StackView
        outputList={outputList}
        inputList={inputList}
        onOutputDelete={onOutputDelete}
        onOutputEdit={onOutputEdit}
      />
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
