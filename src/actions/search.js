import axios from 'axios';
import { SEARCH_RESULT, EMPTY_RESULT } from './types';

const ROOT_URL = 'https://api.themoviedb.org/3/search/tv?api_key=e88fbcbf7600bbb2fbc4469a5d75ca09';

export function search(query, page = 1) {
	return dispatch => {
		const url = `${ROOT_URL}&query=${query}&page=${page}`;

		return axios(url)
			.then(res => {
				dispatch({
					type: SEARCH_RESULT,
					payload: res.data
				});
			})
			.catch(err => {
				console.log(err);
			});
	};
}

export function emptyResults() {
	return {
		type: EMPTY_RESULT
	};
}
