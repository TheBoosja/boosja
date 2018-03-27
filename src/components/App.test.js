import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';

describe('App', () => {
	const app = shallow(<App />);

	it('renders properly', () => {
		expect(app).toMatchSnapshot();
	});

	it('contains an AuthListener component', () => {
		expect(app.find('AuthListener').exists()).toBe(true);
	});

	it('contains a Navbar component', () => {
		expect(app.find('Navbar').exists()).toBe(true);
	});

	it('contains a Routes component', () => {
		expect(app.find('Routes').exists()).toBe(true);
	});
});
