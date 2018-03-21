import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
import Navbar from './base/Navbar';
import Routes from './routes';

const Layout = styled.div`
	background-color: ${({ theme }) => theme.bgDark};
	display: grid;
	grid-template-columns: 10vw 1fr;
`;

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<Navbar />

				<Routes />
			</Layout>
		</ThemeProvider>
	);
};

export default App;