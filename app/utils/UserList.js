import axios from 'axios';

function getUserData(username, password) {
	return axios({
		url: 'http://localhost:3000/api/users',
		method: 'get',
	}).catch(function(response){console.log('no response returned ', response);})
}

export default function getUserList(username, password){
	return getUserData(username, password)
}
