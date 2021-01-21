import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import expect from 'expect';
import Adapter from 'enzyme-adapter-react-16';
import App from '../../client/src/components/App';
// import ReviewSnapShot from '../../client/src/components/ReviewSnapShot';

Enzyme.configure({ adapter: new Adapter() });

describe('App Component', () => {
  it('Contains App Class', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists('.app')).toEqual(true);
  });
  it('Renders App Component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).toEqual(1);
  });
});
