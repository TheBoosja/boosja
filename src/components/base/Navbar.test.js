import React from 'react';
import { shallow } from 'enzyme';
import { Nav, NavItem } from 'components/styled';
import { Navbar } from './Navbar';

describe('Navbar', () => {
	const navbar = shallow(<Navbar />);

	it('renders properly', () => {
		expect(navbar).toMatchSnapshot();
	});

	it('contains a link to the homepage', () => {
		expect(navbar.find({ to: '/' }).exists()).toBe(true);
	});

	it('contains a link to the Search page', () => {
		expect(navbar.find({ to: '/search' }).exists()).toBe(true);
	});

	describe('when not authenticated', () => {
		const props = { isAuthenticated: false };
		const navbar = shallow(<Navbar {...props} />);

		it('contains a link to the Sign In page', () => {
			expect(navbar.find({ to: '/signin' }).exists()).toBe(true);
		});

		it('contains a link to the Register page', () => {
			expect(navbar.find({ to: '/register' }).exists()).toBe(true);
		});

		it('does not contain a link to the Profile', () => {
			expect(navbar.find({ to: '/profile' }).exists()).toBe(false);
		});

		it('does not contain a link to Sign out', () => {
			expect(navbar.find({ to: '/signout' }).exists()).toBe(false);
		});
	});

	describe('when authenticated', () => {
		const props = { isAuthenticated: true };
		const navbar = shallow(<Navbar {...props} />);

		it('contains a link to the Profile', () => {
			expect(navbar.find({ to: '/profile' }).exists()).toBe(true);
		});

		it('contains a link to Sign Out', () => {
			expect(navbar.find({ to: '/signout' }).exists()).toBe(true);
		});

		it('does not contain a link to the Sign In page', () => {
			expect(navbar.find({ to: '/signin' }).exists()).toBe(false);
		});

		it('does not contain a link to the Register page', () => {
			expect(navbar.find({ to: '/register' }).exists()).toBe(false);
		});
	});

	describe('styled', () => {
		it('Nav renders properly', () => {
			const nav = shallow(<Nav />);
			expect(nav).toMatchSnapshot();
		});

		it('NavItem renders properly', () => {
			const navItem = shallow(<NavItem />);
			expect(navItem).toMatchSnapshot();
		});
	});
});
