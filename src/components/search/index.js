import React from 'react';
import { Route } from 'react-router-dom';
import { SearchPage } from 'components/styled';

import SearchBar from './SearchBar';
import SearchList from './SearchList';

const Search = ({ match, history }) => {
	return (
		<SearchPage>
			<SearchBar {...{ match, history }} />
			<Route path={`${match.url}/:query/:page?`} component={SearchList} />
		</SearchPage>
	);
};

export default Search;
