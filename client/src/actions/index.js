import axios from 'axios';
import { FETCH_CARS, FETCH_CAR_OF_WEEK , FETCH_CAR_MAKES } from './types';

export const fetchCars = () => async dispatch => {
  const res = await axios.get('/api/models');
  dispatch({ type: FETCH_CARS, payload: res.data });
};

export const fetchCarOfWeek = () => async dispatch => {
  const res = await axios.get('/api/carOfTheWeek');
  dispatch({ type: FETCH_CAR_OF_WEEK, payload: res.data });
};

export const fetchCarMakes = () => async dispatch => {
  const res = await axios.get('/api/makes');
  dispatch({ type: FETCH_CAR_MAKES, payload: res.data });
};