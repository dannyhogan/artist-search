import React from 'react';
import { shallow } from 'enzyme';
import Artist from '../Artist';

describe('Artist component', () => {

  beforeEach(function() {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ ok: true }));
  });


  it('renders Artist component', () => {
    const wrapper = shallow(<Artist match={{ params: 'Drake' }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
