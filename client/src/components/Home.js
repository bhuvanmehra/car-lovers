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
          <HomeComponent />
          <Card carModel={_.find(cars, {"id": this.props.cars.carOfTheWeek.modelId})} />
          <p>{this.props.cars.carOfTheWeek.review}</p>
        </div>
      );
  }
}
function mapStateToProps({ cars }) {
  return { cars };
}

export const HomeComponent = () => {
  return <h4 className="home-title">Car Of The Week</h4>;
};

export default connect(mapStateToProps, { fetchCarOfWeek })(Home);
