import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { expect } from 'chai';
import Card from './Card';
import Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new ReactSixteenAdapter() });
const carModel =   {
  "id": 520,
  "makeId": 50,
  "name": "MX-5",
  "price": 90000,
  "imageUrl": "https://www.mazda.com.au/globalassets/settings/vehicle-assets/mx-5/2018-03-ipm/360s/roadster-gt/46v-soul-red-crystal-metallic/b.png"
};

describe('Card component testing', function() {
  it('renders price', function() {
    const wrapper = shallow(<Card carModel={carModel}/>); 
    const modelPrice = <div className="price">Price - $90000</div>;
    expect(wrapper.contains(modelPrice)).to.equal(true);
  });
});

describe('Card component testing', function() {
  it('renders model name', function() {
    const wrapperCard = shallow(<Card carModel={carModel}/>); 
    const modelName = <div className="model" style={{fontSize: '1.25em', fontWeight: 'bold'}}>Model - MX-5</div>;
    expect(wrapperCard.contains(modelName)).to.equal(true);
  });
});