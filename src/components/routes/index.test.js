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
		const auth = routes.findWhere(r => r.props().path === '/auth');
		expect(auth.exists()).toBe(true);
	});
});