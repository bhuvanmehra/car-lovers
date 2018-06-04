import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCarMakes } from '../actions';
import Select from './Select';
import _ from 'lodash';

class Search extends Component {
  state = {
    selectedMake : '',
    selectedModel : ''
  };
  componentWillMount(){
    this.props.fetchCarMakes();
  }
  onSubmit() {
    const cars = this.props.cars.model;
    const { selectedModel } = this.state;
    if ( selectedModel === '') return null;

    let selectedCar = _.find(cars, {"name": selectedModel});
    this.props.history.push({
      pathname: `/make/model/${selectedCar.id}`,
    });
  }
  onChange(prop) {
    return e => {
      this.setState({
        [prop]: e.target.value
      });

      if (prop === "selectedMake") {
        this.setState({
          selectedModel: ''
        });
      }
    };
  } 
  modelOptionItems(){
    const { selectedMake } = this.state;
    
    if( selectedMake === '') return '';
    const { model, make } = this.props.cars;
    let makeId= _.find(make, {"name": selectedMake}).id;
    let carModelOptions =  _.filter(model, {"makeId": makeId });

    return(carModelOptions.map((carModel) => <option key={carModel.id} value={carModel.name}>{carModel.name}</option>));
  } 
  render() {
    const carMakes = this.props.cars.make;
    const carModels = this.props.cars.model;
    const { selectedModel } = this.state;

    if(typeof(carMakes) === 'undefined' || !carMakes || !carModels) return null;

    let makeOptionItems = carMakes.map((carMake) => <option key={carMake.id} value={carMake.name}>{carMake.name}</option>);
    
    return (      
      <form onSubmit={this.onSubmit.bind(this)}>
        <SearchComponent />
        <Select
          label="Manufacturer"
          onChange={this.onChange("selectedMake")}
          optionItems={makeOptionItems}
        />
        <Select
          label="Model"
          onChange={this.onChange("selectedModel")}
          optionItems={this.modelOptionItems()}
        />
        <button disabled={selectedModel === ''}>Search</button>
      </form>        
    );
  }
}
function mapStateToProps({ cars }) {
  return { cars };
}

export const SearchComponent = () => {
  return <h5 className="header-message" style={{ textAlign: 'center' }}>Please select a car model</h5>;
};

export default connect(mapStateToProps, { fetchCarMakes })(Search);