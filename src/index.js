import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom'
import Router from 'react-router';
import routes from 'routes';
import AppAction from 'actions/app_actions'

AppAction.initApp()

render(routes, document.getElementById('root'));
