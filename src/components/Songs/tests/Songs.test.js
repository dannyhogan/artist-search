import React from 'react';
import { shallow } from 'enzyme';
import Songs from '../Songs';

describe('Songs component', () => {

  it('renders Songs component', () => {
    const songs = [{ title: 'Drake', id: '123' }];
    const wrapper = shallow(<Songs songs={songs} name="Drake" release="123" />);
    expect(wrapper).toMatchSnapshot();
  });
});
