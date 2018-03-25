import React from 'react';
import { shallow } from 'enzyme';
import { SearchBar } from './SearchBar';

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

	it('contains a Form component', () => {
		expect(searchBar.find('Form').exists()).toBe(true);
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
});