import styled from 'styled-components';

export const Heading = styled.h1`
	font-size: 5rem;
	font-weight: 700;
	color: ${({ theme }) => theme.textColor};
	margin-bottom: 2rem;
`;

export const Title = styled.h2`
	font-size: 3.5rem;
	color: ${({ theme }) => theme.textColor};
	margin-bottom: 2rem;
	text-align: center;
`;