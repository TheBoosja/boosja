import React from 'react';
import { Route } from 'react-router-dom';

import SearchBar from './SearchBar';
import SearchList from './SearchList';

const Search = ({ match }) => {
	return (
		<div>
			<SearchBar />
			<Route path={`${match.url}/:query/:page?`} component={SearchList} />
		</div>
	);
};

export default Search;