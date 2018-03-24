import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const Authentication = (props) => {
	const { isAuthenticated, ComposedComponent } = props;

	return !isAuthenticated ?
		<Redirect to='/signin' />
		:
		<ComposedComponent {...props} />;
};

export default function (ComposedComponent) {
	function mapStateToProps({ auth: { isAuthenticated } }) {
		return { 
			isAuthenticated,
			ComposedComponent
		};
	}

	return connect(mapStateToProps)(Authentication);
}