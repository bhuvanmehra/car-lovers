import axios from 'axios';
import { FETCH_CARS, FETCH_CAR_OF_WEEK } from './types';

export const fetchCars = () => async dispatch => {
  const res = await axios.get('/api/models');
  console.log('In fetchCars');
  dispatch({ type: FETCH_CARS, payload: res.data });
};

export const fetchCarOfWeek = () => async dispatch => {
  const res = await axios.get('/api/carOfTheWeek');
  console.log('In fetchCarOfWeek');
  dispatch({ type: FETCH_CAR_OF_WEEK, payload: res.data });
};
