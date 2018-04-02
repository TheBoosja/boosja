import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
	const home = shallow(<Home />);

	it('renders properly', () => {
		expect(home).toMatchSnapshot();
	});

	it('contains a PrimaryHeading component', () => {
		expect(home.find('PrimaryHeading').exists()).toBe(true);
	});

	it('contains a link to the Search page', () => {
		expect(home.find('Anchor').props().to).toEqual('/search');
	});
});
