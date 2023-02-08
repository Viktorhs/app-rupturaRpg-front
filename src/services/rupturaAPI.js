import axios from 'axios';
const BASE_URL = process.env.REACT_APP_API_BASE_URL;

function createHeaders() {
	const auth = JSON.parse(localStorage.getItem('ruptura'));
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

function createCharacterSheet(){
	const config = createHeaders()
	console.log(config)
	const promise = axios.post(`${BASE_URL}/sheet/create`,{}, config)
	return promise
}

function listSheets(){
	const config = createHeaders()
	const promise = axios.get(`${BASE_URL}/sheet/list`, config)
	return promise
}

export {
    signIn,
    signUp,
	createCharacterSheet,
	listSheets
}