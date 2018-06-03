import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { expect } from 'chai';
import {HomeComponent} from './Home';
import Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });
describe('Home component testing', function() {
  it('renders welcome message', function() {
    const wrapper = shallow(<HomeComponent />); 
    const homeTitle = <h5 className='home-title' style={{ textAlign: 'center' }}>Car Of The Week</h5>;
    expect(wrapper.contains(homeTitle)).to.equal(true);
  });
});