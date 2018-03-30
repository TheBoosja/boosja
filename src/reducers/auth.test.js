import authReducer from './auth';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, AUTH_REMOVE_LISTENER } from '../actions/types';

describe('authReducer', () => {
	it('sets the `isAuthenticated`-state to true', () => {
		const authData = { isAuthenticated: true, error: '' };
		expect(authReducer({}, { type: AUTH_USER })).toEqual(authData);
	});

	it('sets the `isAuthenticated`-state to false', () => {
		const authData = { isAuthenticated: false };
		expect(authReducer({}, { type: UNAUTH_USER })).toEqual(authData);
	});

	it('sets the error on the state', () => {
		const error = 'An error occurred';
		const authData = { error };

		expect(authReducer({}, { type: AUTH_ERROR, payload: error })).toEqual(authData);
	});

	it('sets the Remove Listener on the state', () => {
		const removeListener = jest.fn();
		const authData = { removeListener };

		expect(authReducer({}, { type: AUTH_REMOVE_LISTENER, payload: removeListener })).toEqual(
			authData
		);
	});

	it('returns an empty error on default', () => {
		expect(authReducer({}, { type: 'SOME_TYPE' })).toEqual({ error: '' });
	});
});
