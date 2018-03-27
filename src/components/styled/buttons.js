import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Anchor = styled(Link)`
	color: ${({ theme }) => theme.textColor};
	background-color: ${({ theme }) => theme.primaryColor};
	padding: 1rem 2rem;
	text-decoration: none;
`;
Anchor.displayName = 'Anchor';

export const Button = styled.button`
	background-color: ${({ theme }) => theme.primaryColor};
	border: none;
	color: ${({ theme }) => theme.textColor};
	font-family: inherit;
	font-size: ${({ large }) => (large ? '2rem' : '1.5rem')};
	padding: 1rem 2rem;
	cursor: pointer;
	transition: all 0.2s;

	&:hover {
		background-color: ${({ theme }) => theme.primaryColorLight};
	}
`;
Button.displayName = 'Button';
