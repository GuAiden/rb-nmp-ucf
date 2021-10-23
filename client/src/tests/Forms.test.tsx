import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import InputForm from '../components/Forms/InputForm';

Enzyme.configure({ adapter: new Adapter() });

describe('InputForm component', () => {
  it('renders without failure', () => {
    const handleInputChange = jest.fn();
    const component = shallow(<InputForm onInputChange={handleInputChange} />);
    expect(component).toMatchSnapshot();
  });
});
