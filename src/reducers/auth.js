import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, AUTH_REMOVE_LISTENER } from '../actions/types';

export default (state = {}, { type, payload }) => {
	switch (type) {
		case AUTH_USER:
			return { ...state, isAuthenticated: true, error: '' };
		case UNAUTH_USER:
			return { ...state, isAuthenticated: false };
		case AUTH_ERROR:
			return { ...state, error: payload };
		case AUTH_REMOVE_LISTENER:
			return { ...state, removeListener: payload };
		default:
			return { ...state, error: '' };
	}
};
