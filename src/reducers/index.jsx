import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import app from 'reducers/app';
import auth from 'reducers/auth';

export default combineReducers({
  app,
  auth,
  routing: routeReducer
});
