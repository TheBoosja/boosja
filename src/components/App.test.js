import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
	const app = shallow(<App />);

	it('renders properly', () => {
		expect(app).toMatchSnapshot();
	});

	it('contains a Routes component', () => {
		expect(app.find('Routes').exists()).toBe(true);
	});
});