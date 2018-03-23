import React from 'react';
import { Heading, Anchor } from '../styled';

const Home = () => {
	return (
		<div>
			<Heading>Boosja</Heading>
			<Anchor to='/search'>To the Search</Anchor>
		</div>
	);
};

export default Home;