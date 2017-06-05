import axios from 'axios';
import { 
	AUTH_CLIENT,
	UNAUTH_CLIENT,
	AUTH_ERROR,
	FETCH_MESSAGE
} from './types';
import { 
	CLIENT_TOKEN_NAME,
	ROOT_URL
} from '../constants'; 


export function authError(error) {
	return {
		type: AUTH_ERROR,
		payload: error
	};
}

export function signupUser({ email, password, username, name }, cb) {
	return function(dispatch) {
		// Submit email/password to server
		axios.post(`${ROOT_URL}/signup`, { email, password, username, name })
			.then(response => {
				// if request is good
				// - update state to indicate user is authenticated
				dispatch({ type: AUTH_CLIENT });
				// - save the JWT token to localStorage
				localStorage.setItem(CLIENT_TOKEN_NAME, response.data.token);
				
				cb();
				
			})
			.catch((err) => {
				// if request is bad
				// - show an error to the user
				dispatch(authError(err.response.data.error));
			});
	}

}

export function signinUser({ email, password }, cb) {
	return function(dispatch) {
		// Submit email/password to server
		axios.post(`${ROOT_URL}/signin`, { email, password })
			.then(response => {
				// if request is good
				// - update state to indicate user is authenticated
				dispatch({ type: AUTH_CLIENT });

				// - save the JWT token to localStorage
				localStorage.setItem(CLIENT_TOKEN_NAME, response.data.token);
				
				cb();
			})
			.catch((err) => {
				// if request is bad
				// - show an error to the user
				console.log(err);
				dispatch(authError('Bad Sign In Info'));
			});
	}

}

export function signoutUser() {
	localStorage.removeItem(CLIENT_TOKEN_NAME);

	return { type: UNAUTH_CLIENT };
}