import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { expect } from 'chai';
import Header from './Header';
import Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });
describe('Header component testing', function() {
  it('renders Search Link', function() {
    const wrapperHeader = shallow(<Header />); 
    const searchLink = <a className="search" href="/search">Search</a>;
    expect(wrapperHeader.contains(searchLink)).to.equal(true);
  });
});