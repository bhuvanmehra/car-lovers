import { combineReducers } from 'redux';
import CarsReducer from './CarsReducer';

export default combineReducers({
  cars: CarsReducer
});
