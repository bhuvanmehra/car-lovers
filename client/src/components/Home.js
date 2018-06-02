import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchCarOfWeek } from '../actions';
import Card from './Card';

class Home extends Component {
  componentWillMount(){
    this.props.fetchCarOfWeek();
  }

  render() {
    const cars = this.props.cars.model; 
    return (
        <div>
          <h4>Car Of The Week</h4>
          <Card carModel={_.find(cars, {"id": this.props.cars.carOfTheWeek.modelId})} />
          <p>{this.props.cars.carOfTheWeek.review}</p>
        </div>
      );
  }
}
function mapStateToProps(state) {
  return { cars: state.cars };
}

export default connect(mapStateToProps, { fetchCarOfWeek })(Home);
