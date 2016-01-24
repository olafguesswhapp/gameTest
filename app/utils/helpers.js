import axios from 'axios';

function getUserData(username, password) {
	console.log(`username is ${username}`);
	return axios({
		url: 'http://localhost:3000/api/users',
		method: 'post',
		
	})
}

export default function getQPointsUserInfo(username, password){
	return getUserData(username, password)
}