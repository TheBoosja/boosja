import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Home';
import AuthPage from '../auth';

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/auth' component={AuthPage} />
		</Switch>
	)
}

export default Routes;