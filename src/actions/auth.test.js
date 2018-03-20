import { authError } from './auth';
import { AUTH_ERROR } from './types';

it('dispatches an error', () => {
	const expectedAction = { type: AUTH_ERROR, payload: 'An error occurred: Sign in failed' };
	expect(authError('An error occurred', 'Sign in failed')).toEqual(expectedAction);
});