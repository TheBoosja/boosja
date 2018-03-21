import React from 'react';
import { Title, Anchor } from '../styled';

const Home = () => {
	return (
		<div>
			<Title>Boosja</Title>
			<Anchor to='/search'>To the Search</Anchor>
		</div>
	);
};

export default Home;