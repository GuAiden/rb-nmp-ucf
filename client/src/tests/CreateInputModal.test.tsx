import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CreateInputModal from '../components/Forms/InputForm/Create_Input_Modal';
import { Input } from '../components/Forms/Input_Types';

Enzyme.configure({ adapter: new Adapter() });

it('InputModal renders without failure', () => {
  const addInput = jest.fn();
  const inputListMock = [
    {
      output: false,
      conversion: false,
    },
  ] as Input[];
  const component = mount(
    <CreateInputModal onAddInput={addInput} inputList={inputListMock} />,
  );
  expect(component).toMatchSnapshot();
  component.unmount();
});

// it('should display a blank login form, with conversion and output checked by default', () => {
//   const onAddInputMock = jest.fn();
//   const inputListMock = [
//     {
//       output: false,
//       conversion: false,
//     },
//   ] as Input[];
//   const wrapper = mount(
//     <CreateInputModal onAddInput={onAddInputMock} inputList={inputListMock} />,
//   );
//   wrapper.find('#add-button').simulate('click');
//   expect(onAddInputMock).toHaveBeenCalled();
//   expect(onAddInputMock).toMatchInlineSnapshot(`
//     [MockFunction] {
//       "calls": Array [
//         Array [
//           Object {
//             "conversion": false,
//             "output": false,
//           },
//         ],
//       ],
//       "results": Array [
//         Object {
//           "type": "return",
//           "value": undefined,
//         },
//       ],
//     }
//   `);
//   wrapper.unmount();
// });
