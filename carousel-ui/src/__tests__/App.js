import React from 'react';
import App from '../components/App/App';
import { shallow } from 'enzyme';
import { getAllCars } from '../thunks';

jest.mock('react-redux', () => ({
  useDispatch: () => { },
  useEffect: () => { },
  useSelector: () => ({
    cars: { 1: 'test' },
    loading: false
  }),
}));

jest.mock('../thunks');

describe('App', () => {
  let wrapper;
  window.fetch = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should not contain any errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    expect(wrapper).not.toBeNull();
    expect(spy).not.toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });


});
