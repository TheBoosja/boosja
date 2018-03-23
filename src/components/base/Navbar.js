import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Nav, NavItem } from '../styled';
import { withRouter } from 'react-router-dom';

export const Navbar = ({ isAuthenticated }) => {
	const navItems = [
		{ to: '/', label: 'Home', exact: true },
		{ to: '/profile', label: 'Profile', auth: true },
		{ to: '/search', label: 'Search' },
		{ to: '/signout', label: 'Sign Out', auth: true },
		{ to: '/signin', label: 'Sign In', auth: false },
		{ to: '/register', label: 'Register', auth: false }
	];

	const filteredItems = _.filter(navItems, item => {
		if (_.isUndefined(item.auth)) {
			return true;
		}
		
		const authed = _.isUndefined(isAuthenticated) ? false : isAuthenticated;

		return item.auth === authed;
	});

	const navLinks = _.map(filteredItems, ({ exact, to, label }, i) => 
		<NavItem exact={exact || false} to={to} key={i}>{label}</NavItem>);

	return (
		<Nav>
			{navLinks}
		</Nav>
	);
};

function mapStateToProps({ auth: { isAuthenticated } }) {
	return { isAuthenticated };
}

export default withRouter(connect(mapStateToProps)(Navbar));