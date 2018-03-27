import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import moxios from 'moxios';

import { search, emptyResults } from './search';
import { SEARCH_RESULT, EMPTY_RESULT } from './types';

describe('Search actions', () => {
	const createMockStore = configureMockStore([thunk]);
	const store = createMockStore({ search: {} });

	describe('when searching', () => {
		beforeEach(() => {
			moxios.install();
		});

		afterEach(() => {
			moxios.uninstall();
		});

		it('dispatches the SEARCH_RESULT action with the requests result data', () => {
			const mockResponse = { total_results: 100 };
			moxios.wait(() => {
				const request = moxios.requests.mostRecent();
				request.respondWith({
					status: 200,
					response: mockResponse
				});
			});

			const expectedActions = [{ type: SEARCH_RESULT, payload: mockResponse }];

			return store.dispatch(search('lady')).then(() => {
				expect(store.getActions()).toEqual(expectedActions);
			});
		});
	});

	describe('when emptying the result list', () => {
		it('dispatches the EMPTY_RESULT action', () => {
			expect(emptyResults()).toEqual({ type: EMPTY_RESULT });
		});
	});
});
