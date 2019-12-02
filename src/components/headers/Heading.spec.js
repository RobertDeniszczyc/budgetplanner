import React from 'react';
import Heading from './Heading';
import { shallow } from 'enzyme';

test('it renders component', () => {
  const wrapper = shallow(<Heading />);
  expect(wrapper.find('.application__heading--container')).toHaveLength(1);
});

test('it renders supplied heading', () => {
  const wrapper = shallow(<Heading heading={'test heading'} />);
  expect(wrapper.text()).toContain('test heading');
});
