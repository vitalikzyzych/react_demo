import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom'
import Router from 'react-router';
import routes from 'routes';
import AppAction from 'actions/app_actions'
import Root from 'containers/root';

// AppAction.initApp()

render(<Root/>, document.getElementById('root'));
