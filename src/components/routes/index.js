import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'components/base/Home';
import { SignIn, SignUp, SignOut } from 'components/auth';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/signin" component={SignIn} />
			<Route path="/register" component={SignUp} />
			<Route path="/signout" component={SignOut} />
		</Switch>
	);
};

export default Routes;
