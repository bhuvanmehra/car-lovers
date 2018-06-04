import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { expect } from 'chai';
import { CarShowComponent } from './CarShow';
import Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });
describe('Car Show component testing', function() {
  it('renders welcome message', function() {
    const wrapperCarShowComponent = shallow(<CarShowComponent />); 
    const titleMessage = <h5 className="header-message" style={{ textAlign: 'center' }}>Selected Car</h5>;
    expect(wrapperCarShowComponent.contains(titleMessage)).to.equal(true);
  });
});