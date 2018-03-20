import authReducer from './auth';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actions/types';

describe('authReducer', () => {
	it('sets the `isAuthenticated`-state to true', () => {
		const authData = { isAuthenticated: true, error: '' };
		expect(authReducer({}, { type: AUTH_USER })).toEqual(authData);
	});

	it('set the `isAuthenticated`-state to false', () => {
		const authData = { isAuthenticated: false };
		expect(authReducer({}, { type: UNAUTH_USER })).toEqual(authData);
	});

	it('sets the error on the state', () => {
		const authData = { error: 'An error occurred' };
		expect(authReducer({}, { type: AUTH_ERROR, payload: 'An error occurred' })).toEqual(authData);
	});
});