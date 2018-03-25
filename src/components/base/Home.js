import React from 'react';
import styled from 'styled-components';
import { Heading, Anchor } from '../styled';

const Layout = styled.div`
	padding: 2rem 5rem;
`;

const Home = () => {
	return (
		<Layout>
			<Heading>Boosja</Heading>
			<Anchor to='/search'>To the Search</Anchor>
		</Layout>
	);
};

export default Home;