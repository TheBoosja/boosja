import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';

import AuthListener from './util/AuthListener';
import Routes from './routes';
import Navbar from './base/Navbar';

const Layout = styled.div`
	background-color: ${({ theme }) => theme.bgDark};
	display: grid;
	grid-template-columns: 10vw 1fr;
`;

export class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<AuthListener>
					<Layout>
						<Navbar />
						<Routes />
					</Layout>
				</AuthListener>
			</ThemeProvider>
		);
	}
}

export default App;
