import styled from 'styled-components';

export const Form = styled.form`
	display: grid;
	grid-template-columns: 50vw;
	align-content: center;
	justify-content: center;
`;
Form.displayName = 'Form';

export const Input = styled.input`
	background-color: ${({ theme }) => theme.bgLight};
	border: none;
	color: inherit;
	font-family: inherit;
	font-size: 2rem;
	padding: 1rem 2rem;
	width: 100%;

	&:focus {
		outline: none;
	}
`;
Input.displayName = 'Input';

export const Error = styled.span`
	display: block;
	color: red;
	font-size: 1.2rem;
	margin: 1rem 2rem;
`;
Error.displayName = 'Error';