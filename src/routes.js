import React from 'react';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import App        from 'components/app';
import Info       from 'components/info';
import Profile    from 'components/profile';
import createBrowserHistory from 'history/lib/createBrowserHistory';

let history = createBrowserHistory();
export default (
	<Router history={history} >
		<Route path="/" component={App}>
			<IndexRoute component={Profile} />
			<Route path="profile" component={Profile} />
			<Route path="info" component={Info} />
		</Route>
	</Router>
);
