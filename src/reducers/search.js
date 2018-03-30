import { SEARCH_RESULT, EMPTY_RESULT } from 'actions/types';

export default (state = {}, { type, payload }) => {
	switch (type) {
		case SEARCH_RESULT:
			return { ...state, ...payload };
		case EMPTY_RESULT:
			return {
				...state,
				results: undefined,
				total_results: 0,
				page: 0,
				total_pages: 0
			};
		default:
			return state;
	}
};
