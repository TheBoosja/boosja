import React from 'react';
import { shallow } from 'enzyme';
import { SignIn } from './SignIn';

describe('Sign In', () => {
	const mockSignInUser = jest.fn();
	const mockHandleSubmit = jest.fn();
	const mockAuthError = jest.fn();

	const props = { 
		signInUser: mockSignInUser, 
		handleSubmit: mockHandleSubmit,
		authError: mockAuthError
	};
	const signIn = shallow(<SignIn {...props} />);

	it('renders properly', () => {
		expect(signIn).toMatchSnapshot();
	});

	it('contains a Form element', () => {
		expect(signIn.find('Form').exists()).toBe(true);
	});

	it('contains a Field of type email', () => {
		expect(signIn.find({ type: 'email' }).exists()).toBe(true);
	});

	it('contains a Field of type password', () => {
		expect(signIn.find({ type: 'password' }).exists()).toBe(true);
	});

	it('contains a submit Button', () => {
		expect(signIn.find('Button').props().type).toEqual('submit');
	});

	describe('when the user submits the Sign In form', () => {
		it('calls the `signInUser()` with email and password', () => {
			const cred = { email: 'test@mail.com', password: '1234' };
			signIn.instance().onFormSubmit(cred);

			expect(mockSignInUser).toHaveBeenCalledWith(cred);
		});
	});

	describe('when component will unmount', () => {
		it('resets any error from server', () => {
			signIn.instance().componentWillUnmount();
			expect(mockAuthError).toHaveBeenCalledWith('');
		});
	});

	describe('when an error doesn\'t occur', () => {
		it('does not show an error', () => {
			expect(signIn.find('Error').exists()).toBe(false);
		});
	});

	describe('when an error occurs', () => {
		it('shows the error', () => {
			const error = { error: 'An error occurred. Do something!'};
			signIn.setProps(error);

			expect(signIn.find('Error').children().text()).toEqual(error.error);
		});
	});
});