import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAuthStateChangeListener } from 'actions/auth';

export class AuthListener extends Component {
	componentWillMount() {
		this.props.createAuthStateChangeListener();
	}

	componentWillUnmount() {
		this.props.removeListener();
	}

	render() {
		return this.props.children;
	}
}

function mapStateToProps({ auth: { removeListener } }) {
	return { removeListener };
}

const ComputedAuthListener = connect(mapStateToProps, { createAuthStateChangeListener })(
	AuthListener
);
ComputedAuthListener.displayName = 'AuthListener';

export default ComputedAuthListener;
