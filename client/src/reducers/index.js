import { combineReducers } from 'redux';
import CarsReducer from './CarsReducer';

const rootReducer = combineReducers({
  cars: CarsReducer
});

export default rootReducer;
