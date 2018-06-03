import { FETCH_CARS, FETCH_CAR_OF_WEEK, FETCH_CAR_MAKES, FETCH_MODEL } from '../actions/types';

const initialState = {
  make: '',
  model: '',
  carOfTheWeek: '',
  selectedCar: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_CARS:
      return { ...state, model: action.payload };

    case FETCH_CAR_OF_WEEK:
      return { ...state, carOfTheWeek: action.payload };

    case FETCH_CAR_MAKES:
      return { ...state, make: action.payload };
    
    case FETCH_MODEL:
      return { ...state, selectedCar: action.payload };

    default:
      return state;
  }
}
