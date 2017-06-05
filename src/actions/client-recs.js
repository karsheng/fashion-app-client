import axios from 'axios';

import {
	FETCH_RECOMMENDATIONS
} from './types';
import { 
	CLIENT_TOKEN_NAME,
	ROOT_URL
} from '../constants'; 

export function fetchRecommendations() {
	return function(dispatch) {
		axios.get(`${ROOT_URL}/recommendations`, {
			headers: { "client-authorization": localStorage.getItem(CLIENT_TOKEN_NAME) }
		})
		.then(res => {
			dispatch({
				type: FETCH_RECOMMENDATIONS,
				payload: res.data
			});
		});
	}
}