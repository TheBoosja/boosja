import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';

const history = createHistory();
const middleware = routerMiddleware(history);

const createStoreWithMiddleware = applyMiddleware(middleware, reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App store={store} />
		</ConnectedRouter>
	</Provider>
	, document.getElementById('root')
);