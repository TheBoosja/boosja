import React from 'react';
import styled from 'styled-components';
import { PrimaryHeading, Anchor } from 'components/styled';

const Layout = styled.div`
	padding: 2rem 5rem;
`;

const Home = () => {
	return (
		<Layout>
			<PrimaryHeading>Boosja's Movies & TV</PrimaryHeading>
			<Anchor to="/search">To the Search</Anchor>
		</Layout>
	);
};

export default Home;
