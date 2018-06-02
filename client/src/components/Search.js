import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCars } from '../actions';

class Search extends Component {
  render() {
    return <div>Search</div>;
  }
}
function mapStateToProps(state) {
  return { cars: state.cars };
}

export default connect(mapStateToProps, { fetchCars })(Search);
