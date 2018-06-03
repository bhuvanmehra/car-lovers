import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { expect } from 'chai';
import CarShow from './CarShow';
import Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });
describe('Home component testing', function() {
  it('renders welcome message', function() {
    const wrapper = shallow(<CarShow carModel=''/>); 
    const titleMessage = <h4>Selected Car</h4>;
    expect(wrapper.contains(titleMessage)).to.equal(true);
  });
});