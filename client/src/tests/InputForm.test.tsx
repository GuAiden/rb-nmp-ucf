import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CreateInputModal from '../components/Forms/InputForm/Create_Input_Modal';
import { Input } from '../components/Forms/Input_Types';

Enzyme.configure({ adapter: new Adapter() });

describe('CreateInputModal component', () => {
  it('renders without failure', () => {
    const handleAddInput = jest.fn();
    const inputListMock = [
      {
        output: false,
        conversion: false,
      },
    ] as Input[];
    const component = shallow(
      <CreateInputModal
        onAddInput={handleAddInput}
        inputList={inputListMock}
      />,
    );
    expect(component).toMatchSnapshot();
  });
});
