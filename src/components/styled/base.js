import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Anchor = styled(Link)`
	color: ${({ theme }) => theme.textColor};
	background-color: ${({ theme }) => theme.primaryColor};
	padding: 1rem 2rem;
	text-decoration: none;
`;
Anchor.displayName = 'Anchor';

const Button = styled.button`
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

const Image = styled.img`
	display: block;
	height: 100%;
	object-fit: cover;
	width: 100%;
`;
Image.displayName = 'Image';

const Form = styled.form`
	display: grid;
	grid-template-columns: 30vw;
	align-content: center;
	justify-content: center;
`;
Form.displayName = 'Form';

const Input = styled.input`
	background-color: ${({ theme }) => theme.bgLight};
	border: none;
	color: inherit;
	font-family: inherit;
	font-size: 1.5rem;
	padding: 1rem 2rem;
	width: 100%;

	&:focus {
		outline: none;
	}
`;
Input.displayName = 'Input';

const Error = styled.label`
	display: block;
	color: red;
	font-size: 1.2rem;
	margin: 1rem 2rem;
`;
Error.displayName = 'Error';

export { Anchor, Button, Image, Form, Input, Error };
