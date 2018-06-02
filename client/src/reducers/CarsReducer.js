import _ from 'lodash';
import { FETCH_CARS, FETCH_CAR_OF_WEEK } from '../actions/types';

const initialState = {
  make: '',
  model: '',
  carOfTheWeek: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARS:
      return { ...state, model: action.payload };

    case FETCH_CAR_OF_WEEK:
      return { ...state, carOfTheWeek: action.payload };

    default:
      return state;
  }
}
