import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { registerUser, authError } from 'actions/auth';
import { Form, Error, Button, Title } from 'components/styled';
import renderField from './renderField';

export class SignUp extends Component {
	constructor(props) {
		super(props);

		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	componentWillUnmount() {
		this.props.authError('');
	}

	renderAlert() {
		const { error } = this.props;
		return error && <Error>{error}</Error>;
	}

	onFormSubmit({ email, password }) {
		this.props.registerUser({ email, password });
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<Form onSubmit={handleSubmit(this.onFormSubmit)}>
				<Title>Register a new account</Title>
				<Field
					label="Email"
					name="email"
					type="email"
					autoFocus
					component={renderField}
				/>
				<Field
					label="Password"
					name="password"
					type="password"
					component={renderField}
				/>
				<Field
					label="Confirm Password"
					name="passwordConfirm"
					type="password"
					component={renderField}
				/>
				<Button large type="submit">
					Register
				</Button>
				{this.renderAlert()}
			</Form>
		);
	}
}

export function validate({ email, password, passwordConfirm }) {
	const errors = {};

	// Email
	if (!email) {
		errors.email = 'You must enter an email!';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
		errors.email = 'Enter a valid email, please!';
	}

	// Passwords match?
	if (password !== passwordConfirm) {
		errors.passwordConfirm = "Passwords don't match";
	}

	// Password
	if (!password) {
		errors.password = 'You must enter a password';
	} else if (password.length < 8) {
		errors.password = 'The password must contain 8+ characters.';
	}

	// Password Confirmation
	if (!passwordConfirm) {
		errors.passwordConfirm = 'Please re-enter your password!';
	}

	return errors;
}

function mapStateToProps({ auth: { error } }) {
	return { error };
}

export default reduxForm({
	form: 'signup',
	validate
})(connect(mapStateToProps, { registerUser, authError })(SignUp));
