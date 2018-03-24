import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
	const app = shallow(<App />);
	console.log(app.debug());

	it('renders properly', () => {
		expect(app).toMatchSnapshot();
	});

	it('contains a Navbar component', () => {
		expect(app.find('Navbar').exists()).toBe(true);
	});

	it('contains a Routes component', () => {
		expect(app.find('Routes').exists()).toBe(true);
	});
});