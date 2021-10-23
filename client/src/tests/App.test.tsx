import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from '../App';
import Forms from '../components/Forms';

Enzyme.configure({ adapter: new Adapter() });

test('renders navbar', () => {
  render(<App />);
  const linkElement = screen.getByAltText('redbacklogo');
  expect(linkElement).toBeInTheDocument();
});

test('renders menuswitcher component', () => {
  render(<App />);
  const linkElement = screen.getByText('Inputs');
  const linkElement2 = screen.getByText('Outputs');
  const linkElement3 = screen.getByText('Server');
  const linkElement4 = screen.getByText('Summary');
  expect(linkElement).toBeInTheDocument();
  expect(linkElement2).toBeInTheDocument();
  expect(linkElement3).toBeInTheDocument();
  expect(linkElement4).toBeInTheDocument();
});

it('renders forms component correctly without props', () => {
  const component = shallow(<Forms />);
  expect(component).toMatchSnapshot();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
