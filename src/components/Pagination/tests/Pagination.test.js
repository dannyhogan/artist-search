import React from 'react';
import { shallow } from 'enzyme';
import Pagination from '../Pagination';

describe('Pagination component', () => {
  it('renders Pagination component', () => {
    const wrapper = shallow(<Pagination pageUp={() => {}} pageDown={() => {}} count={3} page={5} />);
    expect(wrapper).toMatchSnapshot();
  });
});
