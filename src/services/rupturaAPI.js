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
	console.log(`${BASE_URL}/user/sign-in`)
	const promise = axios.post(`${BASE_URL}/user/sign-in`, body);
	return promise;
}

function signUp(body) {
	console.log(`${BASE_URL}/user/sign-up`)
	const promise = axios.post(`${BASE_URL}/user/sign-up`, body);
	return promise;
}

function createCharacterSheet(){
	const config = createHeaders()
	console.log(config)
	const promise = axios.post(`${BASE_URL}/sheet/create`, {}, config)
	return promise
}

function listSheets(){
	const config = createHeaders()
	const promise = axios.get(`${BASE_URL}/sheet/list`, config)
	return promise
}

function getSheet(id){
	const config = createHeaders()
	const promise = axios.get(`${BASE_URL}/sheet/${id}`, config)
	return promise	
}

function createNewWeapon(sheetId){
	const config = createHeaders()
	const promise = axios.post(`${BASE_URL}/sheet/weapon/${sheetId}`, {}, config)
	return promise	
}

function deleteWeapon(body){
	const config = createHeaders()
	const promise = axios.delete(`${BASE_URL}/sheet/weapon`, body, config)
	return promise	
}

function createNewDefense(sheetId){
	const config = createHeaders()
	const promise = axios.post(`${BASE_URL}/sheet/defense/${sheetId}`, {}, config)
	return promise	
}

function deleteDefense(body){
	const config = createHeaders()
	const promise = axios.delete(`${BASE_URL}/sheet/defense`, body,config)
	return promise	
}

function updateSheet(id, sheet){
	const config = createHeaders()
	const promise = axios.put(`${BASE_URL}/sheet/${id}`, sheet, config)
	return promise	
}

function deleteSheet(id){
	const config = createHeaders()
	const promise = axios.delete(`${BASE_URL}/sheet/${id}`, config)
	return promise	
}

function verify(){
	const config = createHeaders()
	const promise = axios.post(`${BASE_URL}/user/verify`, {}, config)
	return promise	
}

export {
    signIn,
    signUp,
		createCharacterSheet,
		listSheets,
		getSheet,
		createNewDefense,
		createNewWeapon,
		updateSheet,
		deleteSheet,
		deleteDefense,
		deleteWeapon,
		verify
}