import { Component } from 'react';
import { connect } from 'react-redux';
import { signOutUser } from 'actions/auth';

export class SignOut extends Component {
	componentWillMount() {
		this.props.signOutUser();
	}

	componentDidMount() {
		this.props.history.push('/');
	}

	render() {
		return null;
	}
}

export default connect(null, { signOutUser })(SignOut);
