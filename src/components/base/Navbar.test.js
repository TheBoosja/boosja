import React from 'react';
import { shallow } from 'enzyme';
import { Navbar } from './Navbar';
import { Nav, NavItem } from '../styled';

describe('Navbar', () => {
	const navbar = shallow(<Navbar />);

	it('renders properly', () => {
		expect(navbar).toMatchSnapshot();
	});

	it('contains a link to the homepage', () => {
		const homeLink = navbar.findWhere(l => l.props().to === '/');
		expect(homeLink.exists()).toBe(true);
	});

	it('contains a link to the Search page', () => {
		const searchLink = navbar.findWhere(l => l.props().to === '/search');
		expect(searchLink.exists()).toBe(true);
	});

	describe('when not authenticated', () => {
		const props = { isAuthenticated: false };
		const navbar = shallow(<Navbar {...props} />);

		it('contains a link to the Auth page', () => {
			const authLink = navbar.findWhere(l => l.props().to === '/auth');
			expect(authLink.exists()).toBe(true);
		});

		it('does not contain a link to the Profile', () => {
			const profileLink = navbar.findWhere(l => l.props().to === '/profile');
			expect(profileLink.exists()).toBe(false);
		});

		it('does not contain a link to Sign out', () => {
			const signOutLink = navbar.findWhere(l => l.props().to === '/signout');
			expect(signOutLink.exists()).toBe(false);
		});
	});

	describe('when authenticated', () => {
		const props = { isAuthenticated: true };
		const navbar = shallow(<Navbar {...props} />);

		it('contains a link to the Profile', () => {
			const profileLink = navbar.findWhere(l => l.props().to === '/profile');
			expect(profileLink.exists()).toBe(true);
		});

		it('contains a link to Sign Out', () => {
			const signOutLink = navbar.findWhere(l => l.props().to === '/signout');
			expect(signOutLink.exists()).toBe(true);
		});

		it('does not contain a link to the Auth page', () => {
			const authLink = navbar.findWhere(l => l.props().to === '/auth');
			expect(authLink.exists()).toBe(false);
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