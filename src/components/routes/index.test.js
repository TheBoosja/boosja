import React from 'react';
import { shallow } from 'enzyme';
import Routes from './index';

describe('Routes', () => {
	const routes = shallow(<Routes />);

	it('renders properly', () => {
		expect(routes).toMatchSnapshot();
	});

	it('contains a root route', () => {
		expect(routes.find({ path: '/' }).exists()).toBe(true);
	});

	describe('Authentication', () => {
		it('contains a Sign In route', () => {
			expect(routes.find({ path: '/signin' }).exists()).toBe(true);
		});

		it('contains a Register route', () => {
			expect(routes.find({ path: '/register' }).exists()).toBe(true);
		});

		it('contains a Sign Out route', () => {
			expect(routes.find({ path: '/signout' }).exists()).toBe(true);
		});
	});

	describe('Search', () => {
		it('contains a Search route', () => {
			expect(routes.find({ path: '/search' }).exists()).toBe(true);
		});
	});
});
