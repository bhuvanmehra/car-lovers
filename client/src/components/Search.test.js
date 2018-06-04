import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { expect } from 'chai';
import { SearchComponent } from './Search';
import Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });
describe('Car Show component testing', function() {
  it('renders welcome message', function() {
    // const wrapper = shallow(<SearchComponent />); 
    // const titleMessage = <h5 className="header-message" style={{ textAlign: 'center' }}>Please select a car model</h5>;
    // expect(wrapper.contains(titleMessage)).to.equal(true);
  });
});