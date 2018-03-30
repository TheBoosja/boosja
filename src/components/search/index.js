import React from 'react';
import { Route } from 'react-router-dom';

import SearchBar from './SearchBar';
import SearchList from './SearchList';

const Search = ({ match, history }) => {
	return (
		<div>
			<SearchBar {...{ match, history }} />
			<Route path={`${match.url}/:query/:page?`} component={SearchList} />
		</div>
	);
};

export default Search;
