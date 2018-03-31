import { createStore } from 'redux';
import rootReducer from './index';

describe('Root reducer', () => {
	const store = createStore(rootReducer);
	const state = store.getState();

	it('contains a router reducer', () => {
		expect(state.router).toBeDefined();
	});

	it('contains a form reducer', () => {
		expect(state.form).toBeDefined();
	});

	it('contains an auth reducer', () => {
		expect(state.auth).toBeDefined();
	});

	it('contains a search reducer', () => {
		expect(state.search).toBeDefined();
	});
});
