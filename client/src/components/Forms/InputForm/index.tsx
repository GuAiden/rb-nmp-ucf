import React, { Fragment } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './index.css';
import { Input } from '../Input_Types';
import InputCards from './Input_Cards';
import CreateInputModal from './Create_Input_Modal';
import gridviewicon from '../../../assets/gridviewicon.png';
import stackedviewicon from '../../../assets/stackedviewicon.png';

type InputFormProps = {
  onInputChange: (userInputs: Input) => void;
  inputList: Input[];
};

/**
 * @param onInputChange prop function to handle changes to the top-level state in Forms component
 * @returns Functional component for an input form page with a modal to add inputs
 */
const InputForm: React.FunctionComponent<InputFormProps> = ({
  onInputChange,
  inputList,
}: InputFormProps) => {
  const handleAddInput = (userInput: Input): void => {
    onInputChange(userInput);
  };

  return (
    <Fragment>
      <Container className="bg-dark">
        <Container className="pt-4">
          <Row className="justify-content-between">
            <Col md={4} className="my-auto">
              <CreateInputModal onAddInput={handleAddInput} />
            </Col>
            <Col md={4} className="my-auto">
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
        <InputCards inputList={inputList} />
      </Container>
    </Fragment>
  );
};

export default InputForm;