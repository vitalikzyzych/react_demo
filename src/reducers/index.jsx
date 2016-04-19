import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import app from 'reducers/app';

export default combineReducers({
  app,
  routing: routeReducer
});
