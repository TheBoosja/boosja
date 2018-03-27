import { auth } from './firebase';
import { push } from 'react-router-redux';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, AUTH_REMOVE_LISTENER } from './types';

export function createAuthStateChangeListener() {
	return dispatch => {
		const removeListener = auth.onAuthStateChanged(user => {
			if (user) {
				dispatch({ type: AUTH_USER });
			}
		});

		dispatch({ type: AUTH_REMOVE_LISTENER, payload: removeListener });
	};
}

export function registerUser({ email, password }) {
	return dispatch => {
		auth
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				dispatch({ type: AUTH_USER });
				dispatch(push('/profile'));
			})
			.catch(error => {
				dispatch(authError('Unable to sign up user', error.message));
			});
	};
}

export function signInUser({ email, password }) {
	return dispatch => {
		auth
			.signInWithEmailAndPassword(email, password)
			.then(() => {
				dispatch({ type: AUTH_USER });
				dispatch(push('/profile'));
			})
			.catch(error => {
				dispatch(authError('Unable to sign in user', error.message));
			});
	};
}

export function signOutUser() {
	return dispatch => {
		auth
			.signOut()
			.then(() => {
				dispatch({ type: UNAUTH_USER });
			})
			.catch(error => {
				dispatch(authError('Unable to sign out', error.message));
			});
	};
}

export function authError(error, message) {
	return {
		type: AUTH_ERROR,
		payload: `${error}: ${message}`
	};
}
