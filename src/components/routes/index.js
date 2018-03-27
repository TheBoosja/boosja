import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'components/base/Home';
import { SignIn, SignUp, SignOut } from 'components/auth';
import Search from 'components/search';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			{/* Auth */}
			<Route path="/signin" component={SignIn} />
			<Route path="/register" component={SignUp} />
			<Route path="/signout" component={SignOut} />
			{/* Search */}
			<Route path="/search" component={Search} />
		</Switch>
	);
};

export default Routes;
