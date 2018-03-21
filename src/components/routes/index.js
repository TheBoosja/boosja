import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../base/Home';
import SignIn from '../auth/SignIn';

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/auth' component={SignIn} />
		</Switch>
	);
};

export default Routes;