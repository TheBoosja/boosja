import searchReducer from './search';
import { SEARCH_RESULT, EMPTY_RESULT } from 'actions/types';

describe('Search Reducer', () => {
	it('sets the search data on the state', () => {
		const searchData = { results: [], total_results: 50, page: 1, total_pages: 3 };

		expect(searchReducer({}, { type: SEARCH_RESULT, payload: searchData })).toEqual(searchData);
	});

	it('empties the result', () => {
		const searchData = { results: undefined, total_results: 0, page: 0, total_pages: 0 };

		expect(searchReducer({}, { type: EMPTY_RESULT })).toEqual(searchData);
	});

	it('returns the state on default', () => {
		expect(searchReducer({}, { type: 'SOME_TYPE' })).toEqual({});
	});
});
