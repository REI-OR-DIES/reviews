import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import Reviews from '../../client/src/components/Reviews';
import ReviewSnapShot from '../../client/src/components/ReviewSnapShot';

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
xdescribe('Review Snap Shot', () => {
  it('Contains Review Snap Shot Class', () => {
    const wrapper = shallow(<ReviewSnapShot />);
    expect(wrapper.exists('.ReviewSnapShot')).toEqual(true);
  });
  it('Contains Action Box Class', () => {
    const wrapper = shallow(<ReviewSnapShot />);
    expect(wrapper.exists('.actionBox')).toEqual(true);
  });
  it('Renders SnapShot Component', () => {
    const wrapper = shallow(<ReviewSnapShot />);
    expect(wrapper.length).toEqual(1);
  });
});
