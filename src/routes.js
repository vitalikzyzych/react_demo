import React from 'react';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import App        from 'components/app';
import Info       from 'views/info';
import Profile    from 'views/profile';
import Login       from 'views/login';
import Registration    from 'views/registration';
import Authenticated from 'containers/authenticated'
import UnAuthenticated from 'containers/not_authenticated'


export default (
	<Route path="/" component={App}>
		<IndexRoute component={Profile} />
		<Route path="login" component={UnAuthenticated(Login)} />
		<Route path="registration" component={Registration} />
		<Route path="profile" component={Profile} />
		<Route path="info" component={Authenticated(Info)} />
	</Route>
);
