import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
	const home = shallow(<Home />);

	it('renders properly', () => {
		expect(home).toMatchSnapshot();
	});

	it('contains a link to the Search page', () => {
		// console.log(home.debug());
		expect(home.find('Styled(Link)').prop('to')).toEqual('/search');
	});
});