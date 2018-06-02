import { FETCH_CARS, FETCH_CAR_OF_WEEK, FETCH_CAR_MAKES } from '../actions/types';

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

    case FETCH_CAR_MAKES:
    return { ...state, make: action.payload };
    
    default:
      return state;
  }
}
