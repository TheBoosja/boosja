import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navigation = styled.nav`
	background-color: ${({ theme }) => theme.bgLight};
	display: grid;
	height: 100vh;
	position: fixed;
	width: 10vw;
`;
Navigation.displayName = 'Navigation';

const NavigationList = styled.ul`
	align-self: center;
	display: grid;
	list-style: none;
`;
NavigationList.displayName = 'NavigationList';

const NavigationListItem = styled.li``;
NavigationListItem.displayName = 'NavigationListItem';

const NavigationListItemLink = styled(NavLink).attrs({
	activeClassName: 'active'
})`
	&:link,
	&:visited {
		color: ${({ theme }) => theme.textColor};
		display: block;
		font-size: 2rem;
		padding: 1vh 0;
		text-align: center;
		text-decoration: none;
		text-transform: uppercase;
	}

	&:hover,
	&:active {
		color: ${({ theme }) => theme.primaryColorLight};
	}

	&.active {
		color: ${({ theme }) => theme.primaryColorLight};
	}
`;
NavigationListItemLink.displayName = 'NavigationListItemLink';

const Nav = props => {
	return (
		<Navigation>
			<NavigationList>{props.children}</NavigationList>
		</Navigation>
	);
};
Nav.displayName = 'Nav';

const NavItem = props => {
	return (
		<NavigationListItem>
			<NavigationListItemLink {...props}>{props.children}</NavigationListItemLink>
		</NavigationListItem>
	);
};
NavItem.displayName = 'NavItem';

export { Nav, NavItem };
