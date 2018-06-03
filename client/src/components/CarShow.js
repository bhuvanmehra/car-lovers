import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card';
import { fetchModel } from '../actions';

class CarShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchModel(id);    
  }

  render() {
    const { selectedCar } = this.props.cars;
    if (!selectedCar) {
      return <div>Loading. Please wait...</div>;
    }  
    return (
      <div>
        <CarShowComponent />
        <Card carModel={selectedCar} />
      </div>      
    );
  }
}

export const CarShowComponent = () => {
  return <h5 className="header-message" style={{ textAlign: 'center' }}>Selected Car</h5>;
};

function mapStateToProps({ cars }) {
  return { cars };
}

export default connect(mapStateToProps, { fetchModel })(CarShow);