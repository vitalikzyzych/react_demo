import React from 'react';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import App        from 'components/app';
import Info       from 'components/info';
import Profile    from 'components/profile';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Profile} />
		<Route path="profile" component={Profile} />
		<Route path="info" component={Info} />
	</Route>
);
