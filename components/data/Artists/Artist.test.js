import React from 'react';
import { shallow } from 'enzyme';
import Artist from './Artist';

describe('Artist component', () => {
  it('renders Artist', () => {
    const wrapper = shallow(<Artist match={{ params: { match: { pageNum: 2 } } }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
