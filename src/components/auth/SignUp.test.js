import React from 'react';
import { shallow } from 'enzyme';
import { SignUp, validate } from './SignUp';

describe('Sign Up', () => {
	const mockHandleSubmit = jest.fn();
	const mockRegisterUser = jest.fn();
	const mockAuthError = jest.fn();

	const props = { 
		handleSubmit: mockHandleSubmit,
		registerUser: mockRegisterUser, 
		authError: mockAuthError
	};
	const register = shallow(<SignUp {...props} />);

	it('renders properly', () => {
		expect(register).toMatchSnapshot();
	});

	it('contains a Form element', () => {
		expect(register.find('Form').exists()).toBe(true);
	});

	it('contains a Field of type email', () => {
		expect(register.find({ type: 'email' }).exists()).toBe(true);
	});

	it('contains a Field of type password', () => {
		expect(register.find({ type: 'password' }).exists()).toBe(true);
	});

	it('contains a Field of type password and name of `passwordConfirm`', () => {
		expect(register.find({ type: 'password', name: 'passwordConfirm' }).exists()).toBe(true);
	});

	it('contains a submit Button', () => {
		expect(register.find('Button').props().type).toEqual('submit');
	});

	describe('when the user submits the Register from', () => {
		it('calls the `registerUser()` with email and password', () => {
			const cred = { email: 'test@mail.com', password: '1234' };
			register.instance().onFormSubmit(cred);

			expect(mockRegisterUser).toHaveBeenCalledWith(cred);
		});
	});

	describe('when component will unmount', () => {
		it('resets any error from server', () => {
			register.instance().componentWillUnmount();
			expect(mockAuthError).toHaveBeenCalledWith('');
		});
	});

	describe('when an error doesn\'t occur', () => {
		it('does not show an error', () => {
			expect(register.find('Error').exists()).toBe(false);
		});
	});

	describe('when an error occurs', () => {
		it('shows the error', () => {
			const error = { error: 'An error occurred. Do something!' };
			register.setProps(error);

			expect(register.find('Error').children().text()).toEqual(error.error);
		});
	});

	describe('validation', () => {
		describe('when given no credentials', () => {
			const cred = { email: '', password: '', passwordConfirm: '' };
			const res = validate(cred);

			it('email fails', () => {
				expect(res.email).toBeDefined();
			});

			it('password fails', () => {
				expect(res.password).toBeDefined();
			});

			it('password confirmation fails', () => {
				expect(res.passwordConfirm).toBeDefined();
			});
		});

		describe('when given wrong credentials', () => {
			const cred = { email: '123.com', password: '1234', passwordConfirm: '4321' };
			let res = validate(cred);

			describe('email fails', () => {
				it('when no `@` is given', () => {
					expect(res.email).toBeDefined();
				});

				it('when no domain name is given', () => {
					cred.email = '123@';
					res = validate(cred);

					expect(res.email).toBeDefined();
				});

				it('when no ending is given', () => {
					cred.email = '123@mail.';
					res = validate(cred);

					expect(res.email).toBeDefined();
				});
			});

			describe('password fails', () => {
				it('when shorter than 8 characters', () => {
					expect(res.password).toBeDefined();
				});
			});

			describe('password confirmation fails', () => {
				it('when not matching password', () => {
					expect(res.passwordConfirm).toBeDefined();
				});
			});
		});

		describe('when given correct credentials', () => {
			const cred = { email: '123@mail.com', password: '12345678', passwordConfirm: '12345678' };
			const res = validate(cred);

			it('email succeeds', () => {
				expect(res.email).toBeUndefined();
			});

			it('password succeeds', () => {
				expect(res.password).toBeUndefined();
			});

			it('password confirmation succeeds', () => {
				expect(res.passwordConfirm).toBeUndefined();
			});
		});
	});
});