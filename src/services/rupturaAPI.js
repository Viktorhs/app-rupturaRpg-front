import axios from 'axios';
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

function createHeaders() {
	const auth = JSON.parse(localStorage.getItem('token'));
	const config = {
		headers: {
			Authorization: `Bearer ${auth.token}`,
		},
	};

	return config;
}

function signIn(body) {
	const promise = axios.post(`${BASE_URL}/user/sign-in`, body);
	return promise;
}

function signUp(body) {
	const promise = axios.post(`${BASE_URL}/user/sign-up`, body);
	return promise;
}

export {
    signIn,
    signUp
}