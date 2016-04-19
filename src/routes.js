import React from 'react';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import App        from 'components/app';
import Info       from 'views/info';
import Profile    from 'views/profile';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Profile} />
		<Route path="profile" component={Profile} />
		<Route path="info" component={Info} />
	</Route>
);
