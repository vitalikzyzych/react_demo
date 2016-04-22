import React from 'react';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import App        from 'components/app';
import Info       from 'views/info';
import Profile    from 'views/profile';
import Auth from 'containers/require_authentication'

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Profile} />
		<Route path="profile" component={Profile} />
		<Route path="info" component={Auth(Info)} />
	</Route>
);
