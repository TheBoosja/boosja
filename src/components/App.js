import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
// Auth
import { auth } from 'actions/firebase';
import { AUTH_USER } from 'actions/types';

import Routes from './routes';
import Navbar from './base/Navbar';

const Layout = styled.div`
	background-color: ${({ theme }) => theme.bgDark};
	display: grid;
	grid-template-columns: 10vw 1fr;
`;

class App extends Component {
	componentWillMount() {
		this.removeListener = auth.onAuthStateChanged(user => {
			if (user) {
				this.props.store.dispatch({ type: AUTH_USER });
			}
		});
	}

	componentWillUnmount() {
		this.removeListener();
	}

	render() {
		return (
			<ThemeProvider theme={theme}>
				<Layout>
					<Navbar />
					<Routes />
				</Layout>
			</ThemeProvider>
		);
	}
};

export default App;