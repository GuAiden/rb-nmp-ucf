import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CreateInputModal from '../components/Forms/InputForm/createinputmodal';

Enzyme.configure({ adapter: new Adapter() });

it('InputModal renders without failure', () => {
  const addInput = jest.fn();
  const component = shallow(<CreateInputModal onAddInput={addInput} />);
  expect(component).toMatchSnapshot();
});

it('should display a blank login form, with conversion and output checked by default', () => {
  const onAddInputMock = jest.fn();
  const wrapper = shallow(<CreateInputModal onAddInput={onAddInputMock} />);
  wrapper.find('Button.modal-add-wrapper').simulate('click');
  expect(onAddInputMock).toHaveBeenCalled();
  expect(onAddInputMock).toMatchInlineSnapshot(`
    [MockFunction] {
      "calls": Array [
        Array [
          Object {
            "conversion": false,
            "output": false,
          },
        ],
      ],
      "results": Array [
        Object {
          "type": "return",
          "value": undefined,
        },
      ],
    }
  `);
});
