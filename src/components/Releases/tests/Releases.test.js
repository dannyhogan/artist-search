import React from 'react';
import { shallow } from 'enzyme';
import Releases from '../Releases';

describe('Releases component', () => {
  it('renders Releases component', () => {
    const release = { title: 'Forever', id: '123', 'cover-art-archive': { count: 3 } };
    const wrapper = shallow(<Releases artist="Drake" releases={[release]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
