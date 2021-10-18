import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CreateInputModal from '../components/Forms/InputForm/createinputmodal';

Enzyme.configure({ adapter: new Adapter() });

describe('CreateInputModal component', () => {
  it('renders without failure', () => {
    const handleAddInput = jest.fn();
    const component = shallow(<CreateInputModal onAddInput={handleAddInput} />);
    expect(component).toMatchSnapshot();
  });
});
