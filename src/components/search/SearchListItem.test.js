import React from 'react';
import { shallow } from 'enzyme';
import SearchListItem from './SearchListItem';

describe('Search List Item', () => {
	const show = { name: 'Test' };
	const props = { show };
	const listItem = shallow(<SearchListItem {...props} />);

	it('renders properly', () => {
		expect(listItem).toMatchSnapshot();
	});

	it('contains a ResultItem component', () => {
		expect(listItem.find('ResultItem').exists()).toBe(true);
	});
});
