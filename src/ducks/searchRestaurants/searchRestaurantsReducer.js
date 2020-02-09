import {fromJS} from 'immutable';
import restraurantApiService from './../../apiServices/restraurantApiService';


// Initial State
const initialState = {
  isLoading: false,
  restaurants: null,
  isFailed: false
}

// Action types
const types = {
  LOAD_RESTAURANTS_IN_PROGRESS: "LOAD_RESTAURANTS_IN_PROGRESS",
  LOAD_RESTAURANTS_SUCCESS: "LOAD_RESTAURANTS_SUCCESS",
  LOAD_RESTAURANTS_FAILED: "LOAD_RESTAURANTS_FAILED"
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_RESTAURANTS_IN_PROGRESS:
      return fromJS(state)
        .update('isLoading', () => true)
        .update('restaurants', () => [])
        .update('isFailed', () => false)
        .toJS();
    case types.LOAD_RESTAURANTS_SUCCESS:
      return fromJS(state)
        .update('isLoading', () => false)
        .update('restaurants', () => action.data)
        .update('isFailed', () => false)
        .toJS();
    case types.LOAD_RESTAURANTS_FAILED:
      return fromJS(state)
        .update('isLoading', () => false)
        .update('restaurants', () => [])
        .update('isFailed', () => true)
        .toJS();
    default:
      return state;
  }
};

const loadRestaurants = (cityToSearch) => {
  return (dispatch) => {
    dispatch({
      type: types.LOAD_RESTAURANTS_IN_PROGRESS
    });
    restraurantApiService.loadRestaurants(
      cityToSearch,
      (response) => {
        dispatch({
          type: types.LOAD_RESTAURANTS_SUCCESS,
          data: response.restaurants
        });
      },
      (xhr, status, errorMsg) => {
        dispatch({
          type: types.LOAD_RESTAURANTS_FAILED
        });
      }
    );
  };
};

const actions = {
  loadRestaurants
};

export {
  reducer,
  actions,
  types
};
