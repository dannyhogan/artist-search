import React from 'react';
import { shallow } from 'enzyme';
import Artists from '../Artists';

describe('Artists component', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({ ok: true }));
  });

  it('renders Artists component', () => {
    const artists = [{ name: 'Drake', id: '123' }];
    const wrapper = shallow(<Artists artists={artists} />);
    expect(wrapper).toMatchSnapshot();
  });
});
