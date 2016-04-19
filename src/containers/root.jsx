
import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { Router } from 'react-router';

import { syncReduxAndRouter, pushPath } from 'redux-simple-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';

import configureStore from 'stores/redux';
import routes from 'routes';
// import * as authActions from '../actions/auth';

const store = configureStore();


const history = createBrowserHistory();

// syncReduxAndRouter(history, store);

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          {routes}
        </Router>
      </Provider>
    );
  }
}