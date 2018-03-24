import React from 'react';
import { shallow } from 'enzyme';
import Routes from './index';

describe('Routes', () => {
	const routes = shallow(<Routes />);

	it('renders properly', () => {
		expect(routes).toMatchSnapshot();
	});

	it('contains a root route', () => {
		const root = routes.findWhere(r => r.props().path === '/');
		expect(root.exists()).toBe(true);
	});

	it('contains a Sign In route', () => {
		const signIn = routes.findWhere(r => r.props().path === '/signin');
		expect(signIn.exists()).toBe(true);
	});

	it('contains a Register route', () => {
		const register = routes.findWhere(r => r.props().path === '/register');
		expect(register.exists()).toBe(true);
	});

	it('contains a Sign Out route', () => {
		const signOut = routes.findWhere(r => r.props().path === '/signout');
		expect(signOut.exists()).toBe(true);
	});
});