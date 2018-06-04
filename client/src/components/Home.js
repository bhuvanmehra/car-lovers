import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchCarOfWeek } from '../actions';
import Card from './Card';

class Home extends Component {
  componentWillMount() {
    this.props.fetchCarOfWeek();
  }

  render() {
    const cars = this.props.cars.model; 
    const { carOfTheWeek } = this.props.cars;
    return (
      <div>
        <HomeComponent />
        <Card carModel={_.find(cars, {"id": carOfTheWeek.modelId})} />
        <p className="flow-text">{this.props.cars.carOfTheWeek.review}</p>
      </div>
    );
  }
}
function mapStateToProps({ cars }) {
  return { cars };
}

export const HomeComponent = () => {
  return <h5 className="home-title" style={{ textAlign: 'center' }}>Car Of The Week</h5>;
};

export default connect(mapStateToProps, { fetchCarOfWeek })(Home);
