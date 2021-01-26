import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import Reviews from '../../client/src/components/Reviews';

Enzyme.configure({ adapter: new Adapter() });

describe('Reviews Component', () => {
  xit('Contains App Class', () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper.exists('.app')).toEqual(true);
  });
  it('Renders Reviews Component', () => {
    const wrapper = shallow(<Reviews />);
    expect(wrapper.length).toEqual(1);
  });
});
