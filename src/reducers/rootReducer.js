import { combineReducers } from 'redux';
import {reducer as searchRestaurantsReducer} from './../ducks/searchRestaurants/searchRestaurantsReducer';

const rootReducer = combineReducers({
  searchRestaurantsReducer
});


export default rootReducer;
