import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { signInUser, authError } from '../../actions/auth';
import { Form, Error, Button, Title } from '../styled';
import renderField from './renderField';

export class SignIn extends Component {
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
		this.props.signInUser({ email, password });
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<Form onSubmit={handleSubmit(this.onFormSubmit)}>
				<Title>Sign In</Title>
				<Field
					label='Email'
					name='email'
					type='email'
					autoFocus
					component={renderField} />
				<Field
					label='Password'
					name='password'
					type='password'
					component={renderField} />
				<Button large type='submit'>
					Sign In
				</Button>
				{this.renderAlert()}
			</Form>
		);
	}
}

function mapStateToProps({ auth: { error } }) {
	return { error };
}

export default reduxForm({
	form: 'signin'
})(connect(mapStateToProps, { signInUser, authError })(SignIn));