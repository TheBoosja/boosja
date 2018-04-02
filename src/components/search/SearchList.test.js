import React from 'react';
import { shallow } from 'enzyme';
import { SearchList } from './SearchList';

describe('Search List', () => {
	const { query, page } = { query: 'lady', page: 2 };
	const results = [{ name: 'test1' }, { name: 'test2' }];

	const mockSearch = jest.fn();
	const mockEmptyResults = jest.fn();
	const props = {
		match: { params: { query, page } },
		results,
		search: mockSearch,
		emptyResults: mockEmptyResults
	};
	const searchList = shallow(<SearchList {...props} />);

	it('renders properly', () => {
		expect(searchList).toMatchSnapshot();
	});

	it('renders a list of SearchListItems', () => {
		expect(searchList.find('SearchListItem').length).toEqual(results.length);
	});

	describe('when mounting', () => {
		searchList.instance().componentWillMount();

		it('calls the search method with the query and page', () => {
			expect(mockSearch).toHaveBeenCalledWith(query, page);
		});
	});

	describe('when updating', () => {
		let newMockSearch;

		beforeEach(() => {
			newMockSearch = jest.fn();
			searchList.setProps({ search: newMockSearch });
		});

		it('calls the search method when the query is new', () => {
			const newQuery = 'heroes';
			searchList.instance().componentWillUpdate({ match: { params: { query: newQuery } } });

			expect(newMockSearch).toHaveBeenCalledWith(newQuery, 1);
		});

		it('does not call the search method when the query is the same', () => {
			searchList.instance().componentWillUpdate({ match: { params: { query } } });

			expect(newMockSearch).not.toHaveBeenCalled();
		});
	});

	describe('when results is empty', () => {
		const emptyProps = {
			match: { params: { query, page } },
			results: undefined,
			search: mockSearch,
			emptyResults: mockEmptyResults
		};
		const emptySearchList = shallow(<SearchList {...emptyProps} />);

		it('renders loading indicator', () => {
			expect(emptySearchList.find('span').text()).toEqual('Loading...');
		});
	});
});
