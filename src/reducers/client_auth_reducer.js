import {
	AUTH_CLIENT,
	UNAUTH_CLIENT,
	AUTH_ERROR,
	FETCH_MESSAGE
} from '../actions/types';

export default function(state = {}, action) {
	switch(action.type) {
		case AUTH_CLIENT:
			return { ...state, error:'', authenticated: true };
		case UNAUTH_CLIENT:
			return { ...state, authenticated: false };
		case AUTH_ERROR:
			return { ...state, error: action.payload };			
		case FETCH_MESSAGE:
			return { ...state, message: action.payload };
	}

	return state;
}