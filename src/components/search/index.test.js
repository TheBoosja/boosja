import React from 'react';
import { shallow } from 'enzyme';
import Search from './index';

describe('Search page', () => {
	const props = { match: { url: '/search' } };
	const search = shallow(<Search {...props} />);

	it('renders properly', () => {
		expect(search).toMatchSnapshot();
	});

	it('contains a SearchBar component', () => {
		expect(search.find('SearchBar').exists()).toBe(true);
	});

	it('contains a Route with component SearchList', () => {
		expect(search.find('Route').exists()).toBe(true);
	});
});