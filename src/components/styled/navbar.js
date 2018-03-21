import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navigation = styled.nav`
	background-color: ${({ theme }) => theme.bgLight};
	grid-row: 1 / -1;
	height: 100vh;
	display: grid; 
`;

const NavigationList = styled.ul`
	align-self: center;
	display: grid;
	list-style: none;
`;

const NavigationListItem = styled.li`
`;

const NavigationListItemLink = styled(NavLink).attrs({
	activeClassName: 'active'
})`
	&:link,
	&:visited {
		color: ${({ theme }) => theme.textColor}
		display: block;
		font-size: 2rem;
		padding: 2vh 0;
		text-align: center;
		text-decoration: none;
		text-transform: uppercase;
	}

	&:hover,
	&:active {
		color: ${({ theme }) => theme.primaryColorLight}
	}

	&.active {
		color: ${({ theme }) => theme.primaryColorLight}
	}
`;

export const Nav = (props) => {
	return (
		<Navigation>
			<NavigationList>
				{props.children}
			</NavigationList>
		</Navigation>
	);
};

export const NavItem = (props) => {
	return (
		<NavigationListItem>
			<NavigationListItemLink {...props}>{props.children}</NavigationListItemLink>
		</NavigationListItem>
	);
};