
import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { Router } from 'react-router';

import { syncReduxAndRouter, pushPath } from 'redux-simple-router';
import { browserHistory } from 'react-router'

import configureStore from 'stores/redux';
import routes from 'routes';
// import * as authActions from '../actions/auth';

const store = configureStore();



// syncReduxAndRouter(history, store);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {routes}
        </Router>
      </Provider>
    );
  }
}
