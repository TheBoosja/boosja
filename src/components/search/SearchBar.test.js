import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar, validate } from './SearchBar';

describe('Search Bar', () => {
	const mockPush = jest.fn();
	const mockHandleSubmit = jest.fn();

	const props = {
		history: { push: mockPush },
		match: { url: '/search' },
		handleSubmit: mockHandleSubmit
	};
	const searchBar = shallow(<SearchBar {...props} />);

	it('renders properly', () => {
		expect(searchBar).toMatchSnapshot();
	});

	it('contains a form component', () => {
		expect(searchBar.find('form').exists()).toBe(true);
	});

	it('contains a Field component', () => {
		expect(searchBar.find('Field').exists()).toBe(true);
	});

	describe('when user submits search query', () => {
		it('redirects to query route', () => {
			const query = { query: 'lady' };
			searchBar.instance().onFormSubmit(query);

			expect(mockPush).toHaveBeenCalledWith(`/search/${query.query}`);
		});
	});

	describe('Validation', () => {
		it('returns error when no query is entered', () => {
			expect(validate({ query: '' })).toEqual({ query: 'Enter a query' });
		});

		it('returns no error when query is entered', () => {
			expect(validate({ query: 'Breaking Bad' })).toEqual({});
		});
	});
});
