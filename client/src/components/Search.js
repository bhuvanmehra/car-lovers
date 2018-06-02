import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCarMakes } from '../actions';
import Select from './Select';
import _ from 'lodash';

class Search extends Component {
  state = {
    make : '',
    makeId: '',
    model : ''
  };
  componentWillMount(){
    this.props.fetchCarMakes();
  }

  onChange(prop) {
    return e => {
      this.setState({
        [prop]: e.target.value
      });

      if (prop === "make") {
        this.setState({
          model: "0"
        });
      }
    };
  }
  onSubmit() {
    let cars = this.props.cars.model;
    let selectedCar = _.find(cars, {"name": `${this.state.model}`});
    this.props.history.push({
      pathname: `/make/model/${selectedCar.id}`,
      carModel: selectedCar
    })
  }
  modelOptionItems(){
    if(this.state.make === '') return '';
    let carModels = this.props.cars.model;
    let makeId= _.find(this.props.cars.make, {"name": this.state.make}).id;
    let carModelOptions =  _.filter(carModels, {"makeId": makeId })

    let varModelOptionItems = carModelOptions.map((carModel) =>
            <option key={carModel.id} value={carModel.name}>{carModel.name}</option>
        );
    return varModelOptionItems;
  }
  render() {
    let carMakes = this.props.cars.make;
    let carModels = this.props.cars.model;

    if(typeof(carMakes) === 'undefined' || !carMakes || !carModels) return null;

    let makeOptionItems = carMakes.map((carMake) =>
            <option key={carMake.id} value={carMake.name}>{carMake.name}</option>
        );
    
    return (      
          <form onSubmit={this.onSubmit.bind(this)}>
            <Select
              label="Manufacturer"
              onChange={this.onChange("make")}
              optionItems={makeOptionItems}
            />
            <Select
              label="Model"
              onChange={this.onChange("model")}
              optionItems={this.modelOptionItems()}
            />
             <button disabled={this.state.model <= 0}>Search</button>
          </form>        
    );
  }
}
function mapStateToProps(state) {
  return { cars: state.cars };
}

export default connect(mapStateToProps, { fetchCarMakes })(Search);
