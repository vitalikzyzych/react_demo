import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { routerReducer } from 'react-router-redux'
import app from 'reducers/app';
import auth from 'reducers/auth';

export default combineReducers({
  app,
  auth,
  routing: routerReducer
});
