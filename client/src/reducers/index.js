import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import CarsReducer from './CarsReducer';

export default combineReducers({
  cars: CarsReducer
});
